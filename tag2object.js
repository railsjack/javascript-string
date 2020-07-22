const tag2Object = function (tagStr) {
  const parsedTag = tagStr.match(/<([a-zA-Z]+)([^>]*)>((.|\n|\r)*)<\/[^>]>/m);
  return {
    tagName: parsedTag[1],
    attrs: serializeStr(parsedTag[2]),
    text: parsedTag[3],
  };
};

const serializeStr = function (str) {
  const objects = [...str.matchAll(/([a-zA-Z0-9 ]+)\=["' ]*([^"' ]+)/g)];
  const ret = {};
  objects && objects.map((object) => (ret[object[1].trim()] = object[2]));
  return ret;
};

module.exports = tag2Object;