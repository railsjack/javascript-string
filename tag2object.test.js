const tag2Object = require("./tag2object");

describe("\
1) Test for tag2Object", () => {
  const input =
    "<a href='https://google.com' \n\r \
  name='123'>\r\n google.com</a>";
  it("extracts tag name to equal 'a'", () => {
    const fn = jest.fn((input) => tag2Object(input).tagName);
    expect(fn(input)).toBe("a");
  });

  it("extracts text to equal '\\r\\n google.com'", () => {
    const fn = jest.fn((input) => tag2Object(input).text);
    expect(fn(input)).toBe("\r\n google.com");
  });

  it("extracts href to equal 'https://google.com'", () => {
    const fn = jest.fn((input) => tag2Object(input).attrs.href);
    expect(fn(input)).toBe("https://google.com");
  });

  it("extracts name to equal '123'", () => {
    const fn = jest.fn((input) => tag2Object(input).attrs.name);
    expect(fn(input)).toBe("123");
  });
});

describe("\
2) Test for tag2Object in case of empty condition", () => {
  const input = "<a>\r\n google.com</a>";

  it("extracts tag name to equal 'a'", () => {
    const fn = jest.fn((input) => tag2Object(input).tagName);
    expect(fn(input)).toBe("a");
  });

  it("extracts href to equal undefined", () => {
    const fn = jest.fn((input) => tag2Object(input).attrs.href);
    expect(fn(input)).toBe(undefined);
  });

  it("extracts name to equal undefined", () => {
    const fn = jest.fn((input) => tag2Object(input).attrs.name);
    expect(fn(input)).toBe(undefined);
  });
});
