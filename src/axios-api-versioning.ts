import axios, { AxiosInstance, AxiosStatic } from 'axios';
import { AxiosWithVersioning, IWithVersioningConfig, IVersioningConfig } from './types'
import { injectApiVersioningInterceptor } from './axios-api-versioning-interceptor'
import { defaultWithVersioningConfig } from './defaultConfig';

export function withVersioning(instance: AxiosInstance | AxiosStatic, config?: IWithVersioningConfig) {
    // merge default config options
    const versioningConfig: IWithVersioningConfig = { ...defaultWithVersioningConfig, ...config };

    // deep clone the instance so we don't affect it in any way
    let clonedInstance = axios.create(instance.defaults);

    // set up for modifying the instance.defaults object
    let value: any = {
        versioningStrategy: versioningConfig.versioningStrategy
    };

    if (versioningConfig.apiVersion) {
        value['apiVersion'] = versioningConfig.apiVersion;
    }

    value = {
        ...clonedInstance.defaults,
        ...value
    }

    // set defaults property to new defaults w/ apiVersion and versioningStrategy
    Object.defineProperty(clonedInstance, 'defaults', {
        value,
        configurable: true,
    })

    // add required api versioning interceptor
    injectApiVersioningInterceptor(clonedInstance as AxiosWithVersioning, versioningConfig as IVersioningConfig);

    return clonedInstance as AxiosWithVersioning;
}