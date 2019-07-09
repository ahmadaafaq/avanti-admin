import { css } from "@emotion/core";
import mq from "../../Services/StyleHelpers/MediaQueries";

const PaginationStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #212121;
  color: #fff;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  border: 2px solid rgba(0, 128, 0, 0.9);

  .table-page {
    padding: 5px;
    border-right: 1px solid white;
    flex-grow: 1;
    margin-left: 13px;

    &:nth-of-type(7) {
      border-right: 0px;
    }
  }

  ${mq.tabletUp(css`
    width: 25%;
    float: right;
  `)}
`;

export default PaginationStyles;
