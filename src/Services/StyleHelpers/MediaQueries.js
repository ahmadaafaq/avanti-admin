import { css } from '@emotion/core';

const breakpoints = {
    // Numerical values will result in a min-width query
    normalPhoneUp: 320,
    smallTabletUp: 600,
    tabletUp: 768,
    desktopUp: 900,
    lgDesktopUp: 1100,
    xLgDesktopUp: 1400,
    xxLgDesktopUp: 1600,
    // String values will be used as is
    hover: '(hover: hover)',
    conference: '(min-width: 1080px) and (min-height: 1920px)',
    ie11: '(min-width: 0\0)',
};

const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
    const prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
    const suffix = typeof breakpoints[label] === 'string' ? '' : 'px';
    const query = typeof breakpoints[label] === 'string' ? breakpoints[label] : `(${prefix + breakpoints[label] + suffix})`;
    accumulator[label] = (styles, addMq = '') => css`
        @media screen and ${query} ${addMq} {
            ${styles};
        }`;
    return accumulator;
}, {});

export default mq;
