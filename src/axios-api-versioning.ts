import { AxiosInstance, AxiosStatic } from 'axios';
import { AxiosWithVersioning, IWithVersioningConfig } from './types'
import { injectApiVersioningInterceptor } from './axios-api-versioning-interceptor'
import cloneDeep from 'lodash.clonedeep'

export function withVersioning(instance: AxiosInstance | AxiosStatic, config?: IWithVersioningConfig) {
    let axiosWithVersioning = cloneDeep(instance);

    if (config) {
        let value: any;

        if (config.apiVersion) {
            value = {
                ...axiosWithVersioning.defaults,
                versioningStrategy: config.versioningStrategy,
                apiVersion: config.apiVersion
            };
        }
        else {
            value = {
                ...axiosWithVersioning.defaults,
                versioningStrategy: config.versioningStrategy,
            };
        }

        // set default apiVersion
        axiosWithVersioning = Object.defineProperty(axiosWithVersioning, 'defaults', {
            value,
            configurable: true,
        })
    }

    axiosWithVersioning = injectApiVersioningInterceptor(axiosWithVersioning as AxiosWithVersioning);

    return axiosWithVersioning as AxiosWithVersioning;
}