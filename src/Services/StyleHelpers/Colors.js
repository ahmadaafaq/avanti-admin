
/**
 * Stores global simulation colors as defined by the design team
 * @constant
 * @type object colors
 */

export const transparentColors = {
    blue: 'rgba(46, 154, 215, .1)',
    blue2: 'rgba(46, 154, 215, 0.5)',
    green: 'rgba(92,184,92,.1)',
    green2: 'rgba(92,184,92,.5)',
    gray: 'rgba(68, 68, 68, 0.5)',
    gray2: 'rgba(204, 204, 204, 0.25)',
    lightGray: 'hsla(0, 0%, 80%, 0.1)',
    lightGray2: 'hsla(0, 0%, 80%, 0.5)',
    lightGray3: 'rgba(115, 115, 115, 0.1)',
    lightGray4: 'hsla(0, 0%, 100%, 0.15)',
    lightGray5: 'hsla(0, 0%, 45%, .1)',
    lightGray6: 'hsla(0, 0%, 100%, 0.75)',
    red: 'rgba(237, 75, 75, 0.1)',
    red2: 'rgba(237, 75, 75, 0.5)',
    white: 'rgba(255, 255, 255, 0.85)',
    white2: 'rgba(255, 255, 255, 0.15)',
    white3: 'rgba(255, 255, 255, 0.5)',
    white4: 'rgba(239, 239, 239, 0.93)',
    black: 'rgba(14, 17, 18, 0.9)',
    black2: 'rgba(14, 17, 18, 0.6)',
    black3: 'rgba(14, 17, 18, 0.5)',
    black4: 'rgba(14, 17, 18, 0.75)',
    black5: 'rgba(14, 17, 18, 0.93)',
    black6: 'rgba(0, 0, 0, 0.5)',
    black7: 'rgba(0, 0, 0, 0.6)',
    black8: 'rgba(0, 0, 0, 0.2)',
    black9: 'rgba(0, 0, 0, 0.175)',
    black10: 'rgba(14, 17, 18, 1)', // convert to solid -- #0e1112
    black11: 'rgba(42, 45, 50, 0.85)',
    black12: 'rgba(14, 17, 18, 0.8)',
};

export const solidColors = {
    blue: '#2E9AD7',
    blue2: '#639ebc',
    blue3: '#0097cf',
    blue4: '#59afdf',
    blue5: '#70a6b9',
    blue6: '#52BDEC',
    blue7: '#005B81',
    gray: '#9c9c9c',
    gray2: '#5F5F5F',
    gray3: '#aaa',
    gray4: '#bbb',
    gray5: '#8c8c8c',
    lightGray: '#ededed',
    lightGray2: '#ececec',
    lightGray3: '#ccc',
    lightGray4: '#ebebeb',
    lightGray5: '#d5d5d5',
    lightGray6: '#eee',
    lightGray7: '#717171',
    lightGray8: '#A0A0A0',
    darkGray: '#333',
    darkGray2: '#444',
    darkGray3: '#555',
    darkGray4: '#666',
    darkGray5: '#808080',
    darkGray6: '#545454',
    darkGray7: '#676767',
    darkGray8: '#4a4a4a',
    yellow: '#F1C40F',
    yellow2: '#F0AD4E',
    white: '#fff',
    black: '#000',
    black2: '#0e1112',
    black3: '#101314',
    green: '#5CB85C',
    red: '#ED4B4B',
    red2: '#a94442',
    red3: '#BF1313',
    pink: '#f2dede',
    pink2: '#ebccd1',
    orange: '#EC7520',
};

const colors = {
    backgroundColors: {
        blue: {
            transparent: 'rgba(46, 154, 215, .1)',
            solid: '#2E9AD7'
        },
        green: {
            transparent: 'rgba(92,184,92,.1)',
            solid: '',
        },
        gray: {
            transparent: 'rgba(255,255,255, 0.15)',
            solid: '',
        },
        lightGray: {
            transparent: 'hsla(0,0%,80%,.1)',
            solid: '#ededed'
        },
        red: {
            transparent: 'rgba(237, 75, 75, 0.1)',
            solid: '',
        },
        transparent: 'transparent',
        white: '#fff',
    },
    borderColors: {
        blue: {
            transparent: 'rgba(46, 154, 215, 0.5)',
            solid: '#639ebc',
        },
        green: {
            transparent: 'rgba(92,184,92,.5)',
            solid: '',
        },
        gray: {
            transparent: 'rgba(68, 68, 68, 0.5)',
            solid: '#9c9c9c',
        },
        lightGray: {
            transparent: 'hsla(0,0%,80%,.5)',
            solid: '#ececec',
        },
        red: {
            transparent: 'rgba(237, 75, 75, 0.5)',
            solid: '',
        },
        transparent: 'transparent',
        white: '#fff',
    },
    fontColors: {
        black: '#000',
        black2: '#454545',
        blue: '#2E9AD7',
        darkGray: '#333',
        green: '#5CB85C',
        gray: '#5F5F5F',
        lightGray: '#ccc',
        lighterGray: '#ebebeb',
        midGray: '#aaa',
        red: '#ED4B4B',
        transparent: 'transparent',
        white: '#fff',
    },
    hoverColors: {
        blue: '',
        green: '',
        gray: '',
        red: '',
        transparent: 'transparent',
        white: '#fff',
    }
};

export default colors;
