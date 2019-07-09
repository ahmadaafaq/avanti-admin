import { css } from "@emotion/core";

const FormStyles = css`
  .form-group {
    display: flex;
    flex-direction: row;
  }

  .form-group label {
    flex: none;
    display: block;
    width: 125px;
    font-weight: bold;
    font-size: 1em;
  }
  .form-group label.right-inline {
    text-align: right;
    padding-right: 8px;
    padding-left: 10px;
    width: auto;
  }

  .form-group .input-control {
    display: block;
    margin-bottom: 10px;
    margin-right: 8px;
    padding: 4px;
    margin-top: -4px;
  }

  .form-group .select-control {
    display: block;
    margin-bottom: 10px;
    margin-right: 8px;
    margin-left: 0px;
    padding: 4px;
    margin-top: -4px;
    width: 23.5%;
  }

  .right-inline-select {
    margin-left: 40px !important;
  }

  button {
    padding: 5px 15px;
    margin: 5px;
    min-width: 100px;
  }

  @media (max-width: 768px) {
    .form-group {
      flex-direction: column;
    }
    .form-group .input-control {
      margin-top: 2px;
    }
    .form-group label.right-inline {
      text-align: left;
      padding-right: 0;
      padding-left: 0;
    }
  }
`;

export default FormStyles;
