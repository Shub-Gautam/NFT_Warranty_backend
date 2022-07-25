exports.upload = async (req, res, next) => {
  try {
    // Save file input to IPFS
    const data = fileInput.files[0];
    const file = new Moralis.File(data.name, data);
    await file.saveIPFS();

    //console.log(file.ipfs(), file.hash())

    // Save file reference to Moralis
    const jobApplication = new Moralis.Object("Applications");
    jobApplication.set("name", "Satoshi");
    jobApplication.set("resume", file);
    await jobApplication.save();

    // Retrieve file
    const query = new Moralis.Query("Applications");
    query.equalTo("name", "Satoshi");
    query.find().then(function ([application]) {
      const ipfs = application.get("resume").ipfs();
      const hash = application.get("resume").hash();
      console.log("IPFS url", ipfs);
      console.log("IPFS hash", hash);
    });
  } catch (err) {
    next(err);
  }
};
