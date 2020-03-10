import React from "react";
import renderer from "react-test-renderer";
import Icon from "./";

it("renders default", () => {
  expect(
    renderer.create(<Icon color="primary">add_circle</Icon>).toJSON()
  ).toMatchSnapshot();
});
