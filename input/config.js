const layersOrder = [
  { name: "background", number: 2 },
  { name: "baseitem", number: 2 },
  { name: "hand", number: 2 },
  //   { name: "logo", number: 1 },
];

const format = {
  width: 230,
  height: 230,
};

const rarity = [
  { key: "", val: "original" },
  { key: "_r", val: "rare" },
  { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };
