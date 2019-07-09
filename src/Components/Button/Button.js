/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import ButtonStyles from "./Button.style";

class Button extends Component {
  render() {
    return (
      <button
        className={this.props.className}
        css={ButtonStyles(this.props.color)}
        onClick={this.props.clickHandler}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
