import { css } from '@emotion/core';

const MainStyles = css`{
  grid-area: main;
  background-color: #f5f5f5;

  .login-container {
    display: flex;
    flex-direction: column;
    border: 2px solid forestgreen;
    margin-left: 35%;
    margin-top: 10%;
    background-color: #212121;
    padding: 50px;
    width:25%;
    align-items: center;

    input {
      padding: 10px;
      width: 100%;
      margin-top: 20px;
    }

    .login-button {
      width: 50%;
      background-color: forestgreen;
      font-weight: 700;
      margin-left: 25%;
    }

    h2 {
      color: white;
    }
  }
}
`

export default MainStyles;