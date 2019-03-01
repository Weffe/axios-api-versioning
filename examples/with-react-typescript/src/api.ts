import axios from 'axios';
import { withVersioning, VersioningStrategy, IWithVersioningConfig } from 'axios-api-versioning'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000'
});

const config: IWithVersioningConfig = {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.MediaType,
}

const client = withVersioning(axiosInstance, config);

/**
 * here we manually set the apiVersion & versioningStrategy on every request
 * as to override any default setting.
 * 
 * If you have an app where you don't need to mix api versions,
 * then set your active version inside the withVersioning()
 */
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