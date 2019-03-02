import axios from 'axios';
// import { IWithVersioningConfig, VersioningStrategy, withVersioning } from '../src';
import { IWithVersioningConfig, withVersioning, VersioningStrategy, MediaTypeFormatterFn } from 'axios-api-versioning';
import { AxiosAdapterWithVersioning } from 'axios-api-versioning/dist/esm/types/axios';

const formatter: MediaTypeFormatterFn = ({ acceptHeader, apiVersion, mediaTypeKeyName }) => (
    `${acceptHeader}; ${mediaTypeKeyName}=${apiVersion}`
);

const versioningConfig: IWithVersioningConfig = {
    apiVersion: '1.0',
    versioningStrategy: VersioningStrategy.UrlPath
}

const client = withVersioning(axios, versioningConfig);

client.get('hello', {
    apiVersion: '12'
})
