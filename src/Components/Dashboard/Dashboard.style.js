import { css } from "@emotion/core";
import {
  fontSizes,
  fontWeights,
  fontFamilies
} from "../../Services/StyleHelpers/Typography";

const DashboardStyles = css`{
  .dashboard-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    grid-auto-rows: 94px;
    grid-gap: 20px;
    margin: 20px;
  }
  
  .overviewcard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: rgba(0,128,0,0.9);

    .card-icon {
      align-content: center;
      padding: 5px;
    }

    .card-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      padding: 5px; 
      ${fontSizes(1.2)}
      font-weight: ${fontWeights.regular};
      font-family: ${fontFamilies.brandon};
    }
  }
`;

export default DashboardStyles;
