import { css } from '@emotion/core';
import { solidColors } from '../../Services/StyleHelpers/Colors';
import zIndices from '../../Services/StyleHelpers/Layers';

const loadingIconStyles = css`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: ${zIndices.loader};

.loading-icon {
  display: block;
  width: 35px;
  height: 35px;
  background: transparent;
  border: 4px solid ${solidColors.lightGray5};
  border-bottom-color: ${solidColors.blue6};
  border-radius: 50%;
  transition: all 0.7s ease-in-out;
  animation: spin1 .75s linear infinite;
  margin: auto;
}
`;

export default loadingIconStyles;
