var request = require("request");
const fs = require("fs");
const Model = require("../../model");
const { uploadFile, uploadJson } = require("../../helper/ipfsClient");

exports.upload = async (req, res, next) => {
  try {
    const artData = await Model.ArtData.findOne({ _id: req.body._id });

    // Process to fetch nft art
    let url = `${artData.img_url}`;

    request.defaults({ encoding: null });

    let requests = {
      headers: {
        "Content-Type": "image/jpeg",
        Authorization: "your token",
      },
      encoding: "binary",
    };

    request.get(url, requests, (error, response, body) => {
      if (error) {
        console.log("error in get photo", error);
        return "default image to server";
      } else {
        if (response.statusCode == 200) {
          fs.writeFile(
            "./temp/uploadable/01_NFT.png",
            body,
            "binary",
            function (err) {
              if (err) {
                return "your message";
              } else {
                return "success";
              }
            }
          );
        } else {
          console.log("error in get photo");
          return res.send("Sorry Something went wrong");
        }
      }
    });

    // Fetching Meta data
    const jsonData = await Model.ArtMetaData.findOne({
      _id: artData.metadata,
    }).lean();

    console.log(jsonData);

    const uploadedFile = await uploadFile(
      "C:\\Users\\SHUBHAM\\Documents\\NFT-war\\temp\\uploadable\\01_NFT.png"
    );
    const uploadedJson = await uploadJson(jsonData);

    const mainNFT = {
      nft_id: artData.nft_id,
      filehash: uploadedFile.cid,
      filepath: uploadedFile.path,
      metadatahash: uploadedJson.cid,
      metadatapath: uploadedJson.path,
    };

    res.send("success");
  } catch (err) {
    next(err);
  }
};
