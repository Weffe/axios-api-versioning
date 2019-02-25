import axios from 'axios';
import { withVersioning } from '../axios-api-versioning';
import { AxiosWithVersioning, IWithVersioningConfig, VersioningStrategy } from '../types';

const testVersioningConfig: IWithVersioningConfig = {
    apiVersion: '1.5.0',
    versioningStrategy: VersioningStrategy.UrlPath
}

describe('Testing no pollution on AxiosStatic using withVersioning() with a global versioningConfig', () => {
    beforeAll(() => {
        const instance = withVersioning(axios, testVersioningConfig);
    })

    test('it should not add "apiVersion" to AxiosStatic defaults', () => {
        expect(axios.defaults['apiVersion']).toBe(undefined);
    })

    test('it should not add "versioningStrategy" to AxiosStatic defaults', () => {
        expect(axios.defaults['versioningStrategy']).toBe(undefined);
    })

    test('it should not add "ApiVersioningInterceptor" to AxiosStatic interceptors', () => {
        // @ts-ignore
        // we directly check the length of the handlers array for the request interceptors
        expect(axios.interceptors.request["handlers"].length)
            .toBe(0);
    })
})

describe('Testing correct return value of withVersioning() using a global versioningConfig on AxiosStatic', () => {
    let instance: AxiosWithVersioning;

    beforeAll(() => {
        instance = withVersioning(axios, testVersioningConfig);
    })

    test('it should correctly add "apiVersion" to instance defaults', () => {
        expect(instance.defaults['apiVersion']).toBe(testVersioningConfig.apiVersion)
    })

    test('it should correctly add "versioningStrategy" to instance defaults', () => {
        expect(instance.defaults['versioningStrategy']).toBe(testVersioningConfig.versioningStrategy)
    })


    test('it should correctly add "ApiVersioningInterceptor" to instance interceptors', () => {
        // @ts-ignore
        // we directly check the length of the handlers array for the request interceptors
        expect(instance.interceptors.request["handlers"].length)
            .toBe(1);
    })
})

describe('Testing correct return value of withVersioning() using NO global versioningConfig on AxiosStatic', () => {
    let instance: AxiosWithVersioning;

    beforeAll(() => {
        instance = withVersioning(axios);
    })

    test('it should not add "apiVersion" to instance defaults', () => {
        expect(instance.defaults['apiVersion']).toBe(undefined)
    })

    test('it should not add "versioningStrategy" to instance defaults', () => {
        expect(instance.defaults['versioningStrategy']).toBe(undefined)
    })

    test('it should correctly add "ApiVersioningInterceptor" to instance interceptors', () => {
        // @ts-ignore
        // we directly check the length of the handlers array for the request interceptors
        expect(instance.interceptors.request["handlers"].length)
            .toBe(1);
    })
})

describe('Testing correct return value of withVersioning() using a global versioningConfig on AxiosInstance', () => {
    let instance: AxiosWithVersioning;

    beforeAll(() => {
        const axiosInstance = axios.create();
        instance = withVersioning(axiosInstance, testVersioningConfig);
    })

    test('it should correctly add "apiVersion" to instance defaults', () => {
        expect(instance.defaults['apiVersion']).toBe(testVersioningConfig.apiVersion)
    })

    test('it should correctly add "versioningStrategy" to instance defaults', () => {
        expect(instance.defaults['versioningStrategy']).toBe(testVersioningConfig.versioningStrategy)
    })


    test('it should correctly add "ApiVersioningInterceptor" to instance interceptors', () => {
        // @ts-ignore
        // we directly check the length of the handlers array for the request interceptors
        expect(instance.interceptors.request["handlers"].length)
            .toBe(1);
    })
})

describe('Testing correct return value of withVersioning() using NO global versioningConfig on AxiosInstance', () => {
    let instance: AxiosWithVersioning;

    beforeAll(() => {
        const axiosInstance = axios.create();
        instance = withVersioning(axiosInstance);
    })

    test('it should not add "apiVersion" to instance defaults', () => {
        expect(instance.defaults['apiVersion']).toBe(undefined)
    })

    test('it should not add "versioningStrategy" to instance defaults', () => {
        expect(instance.defaults['versioningStrategy']).toBe(undefined)
    })

    test('it should correctly add "ApiVersioningInterceptor" to instance interceptors', () => {
        // @ts-ignore
        // we directly check the length of the handlers array for the request interceptors
        expect(instance.interceptors.request["handlers"].length)
            .toBe(1);
    })
})