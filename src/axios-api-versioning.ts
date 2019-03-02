import axios, { AxiosInstance, AxiosStatic } from 'axios';
import { AxiosInstanceWithVersioning } from './types/axios';
import { IWithVersioningConfig, IVersioningConfig } from './types'
import { injectApiVersioningInterceptor } from './axios-api-versioning-interceptor'
import { defaultWithVersioningConfig } from './defaultConfig';

export function withVersioning(instance: AxiosInstance | AxiosStatic, config: IWithVersioningConfig) {
    // merge default config options
    const versioningConfig: IVersioningConfig = { ...defaultWithVersioningConfig, ...config };

    // clone the instance so we don't affect it in any way
    let clonedInstance: AxiosInstance = axios.create(instance.defaults);

    // add required api versioning interceptor
    injectApiVersioningInterceptor(clonedInstance, versioningConfig);

    return clonedInstance as AxiosInstanceWithVersioning;
}