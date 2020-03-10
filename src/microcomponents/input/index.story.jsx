import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./";

class TestInput extends React.Component {
  state = {
    name: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { name } = this.state;
    return (
      <Input
        id="outlined-password-input"
        label="text"
        type="text"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={this.handleChange("name")}
        value={name}
      />
    );
  }
}

storiesOf("Input", module).add("default", () => <TestInput />);
