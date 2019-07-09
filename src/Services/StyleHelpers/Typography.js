import { css } from '@emotion/core';
import colors, { solidColors } from './Colors';

export const fontSizes = (fontSize, lineSize) => {
    const lineHeight = lineSize || (fontSize * 1.5);

    return (css`
        font-size: ${fontSize * 16}px;
        line-height: ${lineHeight * 16}px;
        font-size: ${fontSize}rem;
        line-height: ${lineHeight}rem;
    `);
};

/**
 * Stores global simulation font families as defined by the design team
 * @constant
 * @type object fonts
 */
export const fontFamilies = {
    default: '"proxima-nova", Arial, sans-serif',
    brandon: '"brandon-grotesque", Helvetica, sans-serif',
};

/**
 * Stores global simulation font weights as defined by the design team
 * @constant
 * @type object fonts
 */
export const fontWeights = {
    thin: '300',
    regular: '400',
    bold: '600',
    superBold: '700',
};

/**
 * Stores global simulation standardized font styles as defined by the design team
 * @constant
 * @type object fonts
 */
export const customTypography = {
    body: css`
        color: ${colors.fontColors.lighterGray};
        font-family: ${fontFamilies.default};
        ${fontSizes(1, 1.25)}
    `,
    headers: css`
        margin: 0 0 1em;
        font-family: ${fontFamilies.brandon};
        font-weight: ${fontWeights.regular};
        letter-spacing: .05em;
        text-transform: uppercase;
    `,
};

const typography = css`
    h1, h2, h3, h4, h5, h6 {
        ${customTypography.headers};
    }
    h1 {
        ${fontSizes(1.6, 2)}
        color: ${solidColors.white};
    }
    h2 {
        ${fontSizes(1.3, 1.6)}
    }
    h3 {
        ${fontSizes(1.1, 1.3)}
    }
    h4 {
        ${fontSizes(0.9, 1)}
    }
    p {
        ${fontSizes(0.9375, 1.5)}
        margin: 0 0 1em;
    }
    a {
        ${customTypography.body};
        color: ${colors.fontColors.blue};
        font-size: 16px;
        line-height: 24px;
        font-size: 0.9375rem;
        line-height: 1.5rem;
        text-decoration: none;
        transition: color 0.15s ease;

        &:hover {
            color: ${solidColors.blue4};
        }
    }
`;

export default typography;
