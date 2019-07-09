import { css } from "@emotion/core";

const NavigationStyles = css`{
  .sidenav-logo {
    padding-top: 10px;
    padding-bottom: 10px;

    figure {
      text-align:center;
      img {
        width: 100%;
        max-width: 64px;
      }
    }
  }
  
  .sidenav-list {
    list-style-type:none;
    padding: 0;

    span {
      margin-left : 20px;
    }
  }

  .sidenav-list-item {
    padding: 20px 20px 20px 30px;
    color: #ddd;
    
    &.active {
      background-color: rgba(0,128,0,0.9);
    }
  }

  .sidenav-list-item:hover {
    cursor: pointer;
    background-color: rgba(0,128,0,0.8);
  }
`;

export default NavigationStyles;
