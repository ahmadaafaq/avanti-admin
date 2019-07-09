/**
 * Round number
 *
 * @param {number} num
 * @param {number} [precision=0]
 * @returns {number}
 */
export function round(num: number, precision: number = 0) {
    const modifier = 10 ** precision;
    return !modifier ? Math.round(num) : Math.round(num * modifier) / modifier;
}

/**
 * Convert timestamp (positive or negative) with current timestamp into number.
 *
 * @param {number|string} timestamp
 * @returns {number}
 */
export function getValidTimeStamp(timestamp: number | string) {
    const validTimestamp = parseInt(timestamp, 10) * 1000;
    const time = validTimestamp < 0 ? new Date().getTime() + validTimestamp : validTimestamp;
    return time;
}

/**
 * Retrieve number with 2 decimals
 *
 * @param {number} number
 * @returns {number}
 */
export function formatNumber(number: number) {
    return round(number, 2).toFixed(2);
}

/**
 * Convert timestamp (positive or negative) into string with format <i>[mmm] [dd], [yyyy]</i>.
 *
 * @param {number} timestamp
 * @returns {string}
 */
export function formatDate(timestamp: number) {
    const time = getValidTimeStamp(timestamp);
    const dateEntry = new Date(time);
    const locale = window.navigator.language;

    const year = dateEntry.getFullYear();
    let day = dateEntry.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    const month = dateEntry.toLocaleString(locale, { month: 'short' });
    const dateFormatted = `${month} ${day}, ${year}`;
    return dateFormatted;
}

export function toDateString(datetime) {
    const date = new Date(datetime);
    return date.toDateString();
}

export function upperFirst(text: ?string) {
    return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : '';
}

export function lowerFirst(text: ?string) {
    return text ? `${text.charAt(0).toLowerCase()}${text.slice(1)}` : '';
}

export function startCase(text: ?string) {
    return text ? text.toLowerCase()
        .split(' ')
        .map(s => `${s.charAt(0).toUpperCase()}${s.substring(1)}`)
        .join(' ') : '';
}

/**
 * Check if an object is empty.
 *
 * @param {Object} object
 * @returns {boolean}
 */
export function isEmpty(object: Object) {
    return [Object, Array].includes((object || {}).constructor) && !Object.entries((object || {})).length;
}

/**
 * Bind class methods to the instance with the exception of certain standard methods.
 *
 * @param {object} classPrototype
 * @param {object} obj
 * @returns {void}
 */
export function bindClassMethodsToThis(classPrototype: Object, obj: Object) {
    const ignoreMethods = ['constructor', 'render'];
    const ignoreMethodsRe = /^component/;
    Object.getOwnPropertyNames(classPrototype).forEach(prop => {
        if (typeof obj[prop] === 'function' && ignoreMethods.indexOf(prop) === -1 && !ignoreMethodsRe.test(prop)) {
            obj[prop] = obj[prop].bind(obj);
        }
    });
}

/**
 * Check if dom has class.
 *
 * @param {Node} elem
 * @param {string} className
 * @returns {boolean}
 */
export function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

export function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

export function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

export function buildUrl(url, parameters) {
    let qs = "";
    for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            const value = parameters[key];
            qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
        }
    }
    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1); //chop off last "&"
        url = url + "?" + qs;
    }
    return url;
}
