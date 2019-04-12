import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as status from 'http-status-codes';
import { withVersioning } from '../axios-api-versioning';
import { IWithVersioningConfig, VersioningStrategy } from '../types';
import { AxiosInstanceWithVersioning } from '../types/axios';

const test_url = 'http://localhost:3000';
const MOCK_RES = 'hello_world';
let mock: MockAdapter;
let instance: AxiosInstanceWithVersioning;

describe('Testing correct response config of "QueryString" strategy', () => {
    let versioningConfig: IWithVersioningConfig = {
        apiVersion: '1.0',
        versioningStrategy: VersioningStrategy.QueryString
    };

    beforeAll(() => {
        instance = withVersioning(axios, versioningConfig);
        mock = new MockAdapter(instance);
    })

    test('it should have the "apiVersion" as a query param in the response config', async () => {
        mock.onGet(test_url)
            .reply(status.OK, MOCK_RES);

        const res = await instance.get(test_url);
        const { params } = res.config;

        expect(params).toHaveProperty('api-version');
        expect(params['api-version']).toBe(versioningConfig.apiVersion);
    })
})

describe('Testing correct response config of "MediaType" strategy', () => {
    let versioningConfig: IWithVersioningConfig = {
        apiVersion: '1.0',
        versioningStrategy: VersioningStrategy.MediaType
    };

    beforeAll(() => {
        instance = withVersioning(axios, versioningConfig);
        mock = new MockAdapter(instance);
    })

    test('it should have the "apiVersion" as an accept-param in the Accept header', async () => {
        mock.onGet(test_url)
            .reply(status.OK, MOCK_RES);

        const res = await instance.get(test_url);
        const { headers } = res.config;

        expect(headers).toHaveProperty('Accept');
        expect(headers['Accept']).toMatch(`v=${versioningConfig.apiVersion}`)
    })
})

describe('Testing correct response config of "UrlPath" strategy', () => {
    let versioningConfig: IWithVersioningConfig = {
        apiVersion: '1',
        versioningStrategy: VersioningStrategy.UrlPath
    };

    const blank_test_url = test_url + "/v{apiVersion}";
    const versioned_test_url = test_url + `/v${versioningConfig.apiVersion}`;

    beforeAll(() => {
        instance = withVersioning(axios, versioningConfig);
        mock = new MockAdapter(instance);
    })

    test('it should have the "apiVersion" as a url param in the url', async () => {
        mock.onGet(versioned_test_url)
            .reply(status.OK, MOCK_RES);

        const res = await instance.get(blank_test_url);
        const { url } = res.config;

        expect(url).toBe(versioned_test_url);
    })
})