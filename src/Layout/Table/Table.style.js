import { css } from "@emotion/core";
import mq from "../../Services/StyleHelpers/MediaQueries";
import { solidColors } from "../../Services/StyleHelpers/Colors";

const TableStyles = css`
  {
   display: block;
   margin: 2em auto;
   width: 94%;

   div {
     box-sizing: border-box;
   }

   .flex-table {
     display: flex;
     flex-flow: row wrap;
     border-left: solid 2px #000;
     transition: 0.5s;

     &.row:nth-of-type(odd) .flex-row {
       background: ${solidColors.lightGray3};
     }
     ${mq.tabletUp(css`
      flex-flow: row;
     `)}

     div:nth-of-type(1) {
        cursor: pointer;
     }
   }

   .header {
     background: rgba(0, 128, 0, 0.9);
     color: white;
     border-color: #000;
     border-top: solid 2px #000;
     font-weight: 600;
     
     .flex-row{
      text-transform: capitalize;
     }
   }

   .flex-row {
     width: calc(100% / 4);
     text-align: center;
     padding: 0.9em 0.5em;
     border-right: solid 2px #000;
     border-bottom: solid 2px #000;
   }

   .no-data {
      width: 100%
   }

   .table-menu {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     padding: 10px 40px;
     background: #212121;
     color: #fff;

     .table-search {
       padding-bottom: 5px;
     }

     .table-name {
       padding-bottom: 5px;
       p {
         font-weight: 800;
         text-transform: capitalize;
       }
     }

     ${mq.tabletUp(css`
       flex-direction: row;

       .table-search {
         padding-bottom: 0px;
       }

       .table-name {
         margin-right: 145px;
         padding-bottom: 0px;
       }
     `)}
   }
 }
`;

export default TableStyles;