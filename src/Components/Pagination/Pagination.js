/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import PaginationStyles from "./Pagination.style";

class Pagination extends Component {
  render() {
    return (
      <div className="table-pagination" css={PaginationStyles}>
        <div className="table-page">Prev</div>
        <div className="table-page">1</div>
        <div className="table-page">2</div>
        <div className="table-page">3</div>
        <div className="table-page">4</div>
        <div className="table-page">5</div>
        <div className="table-page">Next</div>
      </div>
    );
  }
}

export default Pagination;
