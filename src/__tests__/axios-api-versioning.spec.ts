import axios, { AxiosInstance } from 'axios';
import { withVersioning } from '../axios-api-versioning';
import { IWithVersioningConfig, VersioningStrategy } from '../types';
import { AxiosInstanceWithVersioning } from '../types/axios';

const testVersioningConfig: IWithVersioningConfig = {
    apiVersion: '1.0',
    versioningStrategy: VersioningStrategy.QueryString
}

// define an index type to stop TS from complaining about 
// accessing key/values with an index lookup
declare module 'axios' {
    interface AxiosRequestConfig {
        [key: string]: any
    }
}

describe('Testing no pollution on default exported axios object using withVersioning()', () => {
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

describe('Testing correct return value of withVersioning()', () => {
    let instance: AxiosInstanceWithVersioning;

    beforeAll(() => {
        instance = withVersioning(axios, testVersioningConfig);
    })

    test('it should correctly add "ApiVersioningInterceptor" to instance interceptors', () => {
        // @ts-ignore
        // we directly check the length of the handlers array for the request interceptors
        expect(instance.interceptors.request["handlers"].length)
            .toBe(1);
    })
})

describe('Testing correct return value of withVersioning() using axios.create()', () => {
    let axiosInstance: AxiosInstance;
    let instance: AxiosInstanceWithVersioning;

    beforeAll(() => {
        axiosInstance = axios.create();
        instance = withVersioning(axiosInstance, testVersioningConfig);
    })

    test('it should correctly add "ApiVersioningInterceptor" to instance interceptors', () => {
        // @ts-ignore
        // we directly check the length of the handlers array for the request interceptors
        expect(instance.interceptors.request["handlers"].length)
            .toBe(1);
    })

    test('it should not add "apiVersion" to axios.create() instance', () => {
        expect(axiosInstance.defaults['apiVersion']).toBe(undefined)
    })

    test('it should not add "versioningStrategy" to axios.create() instance', () => {
        expect(axiosInstance.defaults['versioningStrategy']).toBe(undefined)
    })

    test('it should not add "ApiVersioningInterceptor" to axios.create() instance', () => {
        // @ts-ignore
        // we directly check the length of the handlers array for the request interceptors
        expect(axiosInstance.interceptors.request["handlers"].length)
            .toBe(0);
    })
})