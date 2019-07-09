import { buildUrl } from '../../Services/Utils/Utility'

/**
 * Fetch data
 *
 * @param {string} api
 * @param {string} method
 * @returns {Object}
 */

const BASE_URL = 'https://mysterious-inlet-29046.herokuapp.com/api/';

// const BASE_URL = 'http://localhost:8000/api/';

export function fetchData(api, method = 'GET', params = {}) {
    return fetch(
        buildUrl(`${BASE_URL}${api}`, params),
        {
            method: `${method}`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(response => response.json())
        .then(responseData => {
            if (responseData.code === 200) {
                return responseData.data
            }
        })
        .catch(error => console.log(error));
}

/**
 * Submit data
 *
 * @param {string} api
 * @param {string} method
 * @param {object} data
 * @returns {Object}
 */
export function submitData(api, method = 'POST', data) {
    return fetch(`${BASE_URL}${api}`, {
        method: `${method}`,
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    }).then(response => response.json())
        .then(responseData => {
            if (responseData.code === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(error => console.log(error));
}

/**
 * Update data
 *
 * @param {string} api
 * @param {object} data
 * @param {number} id
 * @returns {Object}
 */
export function updateData(api, data, id) {
    return fetch(`${BASE_URL}${api}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    }).then(response => response.json())
        .then(responseData => {
            if (responseData.code === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(error => console.log(error));
}