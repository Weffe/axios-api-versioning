import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000'
});

const client = withVersioning(axiosInstance);

export function getBooksByQueryString(apiVersion: string) {
    return client.get('books', {
        apiVersion,
        versioningStrategy: VersioningStrategy.QueryString,
    })
}

export function getBooksByUrlPath(apiVersion: string) {
    return client.get('v{apiVersion}/books', {
        apiVersion,
        versioningStrategy: VersioningStrategy.UrlPath
    })
}

export function getBooksByMediaType(apiVersion: string) {
    return client.get('books', {
        apiVersion,
        versioningStrategy: VersioningStrategy.MediaType
    })
}