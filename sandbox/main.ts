import axios from 'axios';
import { IWithVersioningConfig, VersioningStrategy, withVersioning } from '../src';

const versioningConfig: IWithVersioningConfig = {
    apiVersion: '1.0',
    versioningStrategy: VersioningStrategy.UrlPath
}

const client = withVersioning(axios, versioningConfig);

client.get('hello', {
    apiVersion: '1'
})
