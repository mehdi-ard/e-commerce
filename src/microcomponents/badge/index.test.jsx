import React from "react";
import renderer from "react-test-renderer";
import Badge from ".";

it("renders default", () => {
  expect(
    renderer.create(<Badge badgeContent="12">default</Badge>).toJSON()
  ).toMatchSnapshot();
});
