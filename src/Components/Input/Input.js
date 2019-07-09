/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import InputStyles from "./Input.style";

class Input extends Component {
  render() {
    return (
      <input
        className={this.props.classname}
        placeholder={this.props.placeholder}
        css={InputStyles}
        onKeyUp={this.props.keyUpHandler()}
      />
    );
  }
}

export default Input;
