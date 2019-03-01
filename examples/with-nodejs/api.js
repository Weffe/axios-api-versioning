const axios = require('axios');
const { withVersioning, VersioningStrategy } = require('axios-api-versioning');

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000'
});

const client = withVersioning(axiosInstance, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.QueryString
});

/**
 * here we manually set the apiVersion & versioningStrategy on every request
 * as to override any default setting.
 * 
 * If you have an app where you don't need to mix api versions,
 * then set your active version inside the withVersioning()
 */

function getBooksByQueryString() {
    return client.get('books')
}

function getBooksByUrlPath() {
    return client.get('v{apiVersion}/books', {
        // override the settings for this request only
        apiVersion: '2',
        versioningStrategy: VersioningStrategy.UrlPath
    })
}

function getBooksByMediaType() {
    return client.get('books', {
        // override the settings for this request only
        apiVersion: '3',
        versioningStrategy: VersioningStrategy.MediaType
    })
}

module.exports = {
    getBooksByQueryString,
    getBooksByUrlPath,
    getBooksByMediaType
}