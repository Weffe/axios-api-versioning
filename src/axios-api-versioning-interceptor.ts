import { AxiosRequestConfig } from 'axios';
import { AxiosWithVersioning, VersioningStrategy, IVersioningConfig } from './types'

function replaceUrlPathWithVersion(url: string, apiVersion: string) {
    // the template name of the api version must be "apiVersion"
    return url.replace('{apiVersion}', apiVersion);
}

function enhanceConfigByVersioningStrategy(instance: AxiosWithVersioning, requestConfig: AxiosRequestConfig, versioningConfig: IVersioningConfig): AxiosRequestConfig {
    if (instance.defaults.hasOwnProperty('apiVersion') === false && requestConfig['apiVersion'] === undefined) {
        return requestConfig;
    }

    // we prioritize the apiVersion passed via the RequestConfig first
    // then use the global default apiVersion last
    const apiVersion = requestConfig['apiVersion'] || instance.defaults['apiVersion'];

    // same way here, we prioritize the RequestConfig first then the global defaults
    const versioningStrategy = requestConfig['versioningStrategy'] || instance.defaults['versioningStrategy'];

    if (versioningStrategy === VersioningStrategy.QueryString) {
        requestConfig.params = {
            ...requestConfig.params,
            [versioningConfig.queryStringKeyName]: apiVersion
        };
    }

    if (versioningStrategy === VersioningStrategy.MediaType) {
        const defaultAcceptHeader = requestConfig.headers.common["Accept"] || '';

        requestConfig.headers = {
            ...requestConfig.headers,
            ["Accept"]: defaultAcceptHeader + `;${versioningConfig.mediaTypeKeyName}=${apiVersion}`
        }
    }

    if (versioningStrategy === VersioningStrategy.UrlPath) {
        requestConfig.url = replaceUrlPathWithVersion(requestConfig.url!, apiVersion);
    }

    return requestConfig;
}

export function injectApiVersioningInterceptor(instance: AxiosWithVersioning, versioningConfig: IVersioningConfig) {
    // add an interceptor
    instance.interceptors.request.use((requestConfig) => {
        const enhancedConfig = enhanceConfigByVersioningStrategy(instance, requestConfig, versioningConfig);
        return enhancedConfig;
    });
}
