import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { withVersioning } from '../axios-api-versioning';
import { AxiosWithVersioning, IWithVersioningConfig, VersioningStrategy } from '../types';

const test_url = 'http://localhost:3000';
const MOCK_RES = 'hello world';

describe('Testing correct response config of "QueryString" strategy using global versioning config', () => {
    let mock: MockAdapter;
    let instance: AxiosWithVersioning;
    let versioningConfig: IWithVersioningConfig = {
        apiVersion: '1',
        versioningStrategy: VersioningStrategy.QueryString
    };

    beforeAll(() => {
        instance = withVersioning(axios, versioningConfig);
        mock = new MockAdapter(instance);
        mock.onGet(test_url)
            .reply(200, MOCK_RES);
    })

    test('it should have the correct "apiVersion" in the response config', async () => {
        const res = await instance.get(test_url);
        const { apiVersion } = res.config;

        console.info(res.config)

        expect(apiVersion).toBe(versioningConfig.apiVersion)
    })
})
