const axios = require('axios');

/**
 * @param {*} method The method which axios will execute "post", "get", "put" or "delete"
 * @param {*} endpoint The URL which the API will call upon
 * @param {*} data The body of the request
 * @param {*} callback Handles the response from the HTTP request
 */
const Requester = async (method, baseURL, endpoint, data, callback) => {
    try {
        const response = await axios[method](
            baseURL + endpoint,
            data
        );
        return callback(response)
    }
    catch (error) {
        // console.log(error, error.response);
        throw new Error(error);
    };
};

module.exports = Requester;
