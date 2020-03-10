import { convertObjectToQueryString } from "./convert-object";

test("converted { a: 1, b: 2 } to 'a=1&b=2'", () => {
  expect(convertObjectToQueryString({ a: 1, b: 2 })).toBe("a=1&b=2");
});

test("converted { a: null, b: undefined } to 'a=null&b=undefined'", () => {
  expect(convertObjectToQueryString({ a: null, b: undefined })).toBe(
    "a=null&b=undefined"
  );
});

test('converted { a: "a", b: "b" } to \'a=a&b=b\'', () => {
  expect(convertObjectToQueryString({ a: "a", b: "b" })).toBe("a=a&b=b");
});

test("converted falsely value to ''", () => {
  expect(convertObjectToQueryString(null)).toBe("");
  expect(convertObjectToQueryString(undefined)).toBe("");
  expect(convertObjectToQueryString(false)).toBe("");
  expect(convertObjectToQueryString(0)).toBe("");
});
