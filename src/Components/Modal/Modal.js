/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import { bindClassMethodsToThis, isEmpty } from "../../Services/Utils/Utility";
import Button from "../Button/Button";
import ModalStyles from "./Modal.style";
import FormStyles from '../Form/Form.style';

class Modal extends Component {
  constructor(props) {
    super(props);
    bindClassMethodsToThis(Modal.prototype, this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.created !== this.props.created && this.props.created === true) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <div className="modal" role="dialog" aria-hidden="true" css={ModalStyles}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={() => this.props.closeModal()}>
              &times;
            </span>
            <h2>
              {!isEmpty(this.props.dataToUpdate) ? "Update" : "Create"} {this.props.screen}
            </h2>
          </div>
          <div className="modal-body" css={FormStyles}>
            {this.props.formData}
          </div>
          <div className="modal-footer">
            <Button className="modal-submit" color="#212121" text="Submit" clickHandler={this.props.submitForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
