import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "./";

storiesOf("typography", module)
  .add("default", () => <Typography>test</Typography>)
  .add("variant h2", () => <Typography variant="h2">test</Typography>);
