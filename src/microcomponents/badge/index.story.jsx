import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "./";

storiesOf("Badge", module)
  .add("default", () => <Badge badgeContent="12">default</Badge>)
  .add("primary", () => (
    <Badge color="primary" badgeContent="12">
      default
    </Badge>
  ));
