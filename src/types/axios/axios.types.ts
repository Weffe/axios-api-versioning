// Matching type definitions for axios 0.18

import {
    AxiosRequestConfig,
    AxiosPromise,
    AxiosInterceptorManager,
    AxiosResponse,
} from 'axios';

/**
 * In order to only expose the apiVersion and versioningStrategy to axios instances with
 * versioning. We had to copy over the types and redefine them with a custom
 * axios request config that has versioning fields defined in them.
 */

export interface AxiosRequestConfigWithVersioning extends AxiosRequestConfig {
    apiVersion?: string;
    versioningStrategy?: string;
    adapter?: AxiosAdapterWithVersioning;
}

export interface AxiosAdapterWithVersioning {
    (config: AxiosRequestConfigWithVersioning): AxiosPromise<any>;
}

export interface AxiosResponseWithVersioning<T = any> extends AxiosResponse {
    config: AxiosRequestConfigWithVersioning;
}

export interface AxiosErrorWithVersioning extends Error {
    config: AxiosRequestConfigWithVersioning;
}

export interface AxiosInstanceWithVersioning {
    (config: AxiosRequestConfigWithVersioning): AxiosPromise;
    (url: string, config?: AxiosRequestConfigWithVersioning): AxiosPromise;
    defaults: AxiosRequestConfigWithVersioning;
    interceptors: {
        request: AxiosInterceptorManager<AxiosRequestConfigWithVersioning>;
        response: AxiosInterceptorManager<AxiosResponseWithVersioning>;
    };
    getUri(config?: AxiosRequestConfigWithVersioning): string;
    request<T = any, R = AxiosResponseWithVersioning<T>>(config: AxiosRequestConfigWithVersioning): Promise<R>;
    get<T = any, R = AxiosResponseWithVersioning<T>>(url: string, config?: AxiosRequestConfigWithVersioning): Promise<R>;
    delete<T = any, R = AxiosResponseWithVersioning<T>>(url: string, config?: AxiosRequestConfigWithVersioning): Promise<R>;
    head<T = any, R = AxiosResponseWithVersioning<T>>(url: string, config?: AxiosRequestConfigWithVersioning): Promise<R>;
    post<T = any, R = AxiosResponseWithVersioning<T>>(url: string, data?: any, config?: AxiosRequestConfigWithVersioning): Promise<R>;
    put<T = any, R = AxiosResponseWithVersioning<T>>(url: string, data?: any, config?: AxiosRequestConfigWithVersioning): Promise<R>;
    patch<T = any, R = AxiosResponseWithVersioning<T>>(url: string, data?: any, config?: AxiosRequestConfigWithVersioning): Promise<R>;
}

export default interface AxiosTypes {
    AxiosRequestConfigWithVersioning: AxiosRequestConfigWithVersioning,
    AxiosAdapterWithVersioning: AxiosAdapterWithVersioning,
    AxiosResponseWithVersioning: AxiosResponseWithVersioning,
    AxiosErrorWithVersioning: AxiosErrorWithVersioning,
    AxiosInstanceWithVersioning: AxiosInstanceWithVersioning,
}