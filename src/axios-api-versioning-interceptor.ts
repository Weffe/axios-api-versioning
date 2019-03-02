import { AxiosInstance } from 'axios';
import { VersioningStrategy, IVersioningConfig, } from './types'
import { AxiosRequestConfigWithVersioning } from './types/axios';

function replaceUrlPathWithVersion(url: string, apiVersion: string) {
    // the template name of the api version must be "apiVersion"
    return url.replace('{apiVersion}', apiVersion);
}

function enhanceConfigByVersioningStrategy(requestConfig: AxiosRequestConfigWithVersioning, versioningConfig: IVersioningConfig): AxiosRequestConfigWithVersioning {

    // we prioritize the apiVersion passed via the RequestConfig first
    // then use the initial versioningConfig last
    const apiVersion = requestConfig['apiVersion'] || versioningConfig['apiVersion'];

    // same way here, we prioritize the RequestConfig first then the initial defaults
    const versioningStrategy = requestConfig['versioningStrategy'] || versioningConfig['versioningStrategy'];

    if (versioningStrategy === VersioningStrategy.QueryString) {
        requestConfig.params = {
            ...requestConfig.params,
            [versioningConfig.queryStringKeyName]: apiVersion
        };
    }

    if (versioningStrategy === VersioningStrategy.MediaType) {
        const defaultAcceptHeader: string = requestConfig.headers.common["Accept"];
        const reqAcceptHeader: string | undefined = requestConfig.headers["Accept"] || undefined;

        // we prioritize an accept header passed in the RequestConfig but default to the
        // the common default accept header value axios provides
        const acceptHeader = reqAcceptHeader || defaultAcceptHeader;

        if (versioningConfig.mediaTypeFormatter) {
            const formattedAcceptHeader = versioningConfig.mediaTypeFormatter({
                apiVersion,
                acceptHeader,
                mediaTypeKeyName: versioningConfig.mediaTypeKeyName
            })

            requestConfig.headers = {
                ...requestConfig.headers,
                ["Accept"]: formattedAcceptHeader
            }
        }
        else {
            requestConfig.headers = {
                ...requestConfig.headers,
                ["Accept"]: acceptHeader + `;${versioningConfig.mediaTypeKeyName}=${apiVersion}`
            }
        }
    }

    if (versioningStrategy === VersioningStrategy.UrlPath) {
        requestConfig.url = replaceUrlPathWithVersion(requestConfig.url!, apiVersion);
    }

    return requestConfig;
}

export function injectApiVersioningInterceptor(instance: AxiosInstance, versioningConfig: IVersioningConfig) {
    // add an interceptor
    instance.interceptors.request.use((requestConfig: AxiosRequestConfigWithVersioning) => {
        const enhancedConfig = enhanceConfigByVersioningStrategy(requestConfig, versioningConfig);
        return enhancedConfig;
    });
}
