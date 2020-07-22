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
  return objects.map((object) => ({ [object[1].trim()]: object[2] }));
};

const input =
  "<a href='https://google.com' \n\r \
asdfasdf='123'>\r\n google.com</a>";
const input2 = "<a>google.com</a>";
const input3 = "<a></a>";

console.log(tag2Object(input));
console.log(tag2Object(input2));
console.log(tag2Object(input3));
