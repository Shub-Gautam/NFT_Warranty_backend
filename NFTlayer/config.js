const layersOrder = [
  { name: "background", number: 7 },
  { name: "baseitem", number: 7 },
  { name: "hand", number: 2 },
  //   { name: "logo", number: 1 },
];

const format = {
  width: 1000,
  height: 1000,
};

const rarity = [
  { key: "", val: "original" },
  { key: "_r", val: "rare" },
  { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };
