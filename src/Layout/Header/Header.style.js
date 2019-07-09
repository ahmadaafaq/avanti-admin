import { css } from '@emotion/core';

const HeaderStyles = css`{
  display: flex;
  justify-content: flex-end;
  grid-area: header;
  background-color: #212121;
  color: #fff;
  
  .header-nav { 
    margin: 20px;
    cursor: pointer;
  }
`

export default HeaderStyles;