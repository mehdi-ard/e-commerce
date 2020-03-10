import React from "react";
import renderer from "react-test-renderer";
import Typography from "./";

it("renders default typography", () => {
  expect(
    renderer.create(<Typography>cdjcsdkj</Typography>).toJSON()
  ).toMatchSnapshot();
});

it("renders variant typography", () => {
  expect(
    renderer.create(<Typography variant="h2">cdjcsdkj</Typography>).toJSON()
  ).toMatchSnapshot();
});
