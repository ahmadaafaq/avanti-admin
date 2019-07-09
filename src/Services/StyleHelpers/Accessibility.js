import { css } from '@emotion/core';
import 'what-input';

const accessibility = css`
    a, button, .form-control, div {
        &:focus, &.active, &:active {
            outline: none;
        }
    }
  
    [data-whatinput="keyboard"] {
        a, button, .form-control, div {
            &:focus {
                outline: thin dotted;
                outline: 5px auto -webkit-focus-ring-color;
            }
        }
    }
`;

export default accessibility;
