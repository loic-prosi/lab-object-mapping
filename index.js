const data = {
  key1: "key1-value",
  key2: "key2-value",
  key3: {
    key3Subkey1: "key3Subkey1-value",
    key3Subkey2: "key3Subkey2-value",
    key3Subkey3: "key3Subkey3-value",
    key3Subkey4: "key3Subkey4-value"
  },
  key4: "key4-value",
  key5: { key5Subkey1: "key5Subkey1-value" }
};

const objectMap = object => {
  Object.keys(object).map(key => {
    console.log(key + ":" + object[key]);
    if (typeof object[key] === "object") objectMap(object[key]);
  });
};

objectMap(data);
