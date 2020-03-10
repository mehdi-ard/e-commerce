import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./";

storiesOf("Button", module)
  .add("default", () => <Button>Hello Button</Button>)
  .add("primary", () => <Button color="primary">primary</Button>)
  .add("primary with variant", () => (
    <Button color="primary" variant="contained">
      primary with variant
    </Button>
  ))
  .add("onClick", () => (
    <Button onClick={action("button-click")}>Hello Button</Button>
  ));
