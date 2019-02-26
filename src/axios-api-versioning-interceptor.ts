import { AxiosRequestConfig } from 'axios';
import { AxiosWithVersioning, VersioningStrategy } from './types'

function replaceUrlPathWithVersion(url: string, apiVersion: string) {
    // the template name of the api version must be "apiVersion"
    return url.replace('{apiVersion}', apiVersion);
}

function enhanceConfigByVersioningStrategy(instance: AxiosWithVersioning, config: AxiosRequestConfig): AxiosRequestConfig {
    if (instance.defaults.hasOwnProperty('apiVersion') === false && config['apiVersion'] === undefined) {
        return config;
    }

    // we prioritize the apiVersion passed via the RequestConfig first
    // then use the global default apiVersion last
    const apiVersion = config['apiVersion'] || instance.defaults['apiVersion'];

    // same way here, we prioritize the RequestConfig first then the global defaults
    const versioningStrategy = config['versioningStrategy'] || instance.defaults['versioningStrategy'];

    if (versioningStrategy === VersioningStrategy.QueryString) {
        config.params = {
            ...config.params,
            'api-version': apiVersion
        };
    }

    if (versioningStrategy === VersioningStrategy.MediaType) {
        const defaultAcceptHeader = config.headers.common["Accept"] || '';

        config.headers = {
            ...config.headers,
            ["Accept"]: defaultAcceptHeader + `;v=${apiVersion}`
        }
    }

    if (versioningStrategy === VersioningStrategy.UrlPath) {
        config.url = replaceUrlPathWithVersion(config.url!, apiVersion);
    }

    return config;
}

export function injectApiVersioningInterceptor(instance: AxiosWithVersioning) {
    // add an interceptor
    instance.interceptors.request.use(config => {
        const enhancedConfig = enhanceConfigByVersioningStrategy(instance, config);
        return enhancedConfig;
    });
}
