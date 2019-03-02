export enum VersioningStrategy {
    QueryString = 'QUERY_STRING',
    UrlPath = 'URL_PATH',
    MediaType = 'MEDIA_TYPE'
}

export type MediaTypeFormatterFn = (data: {
    apiVersion: string,
    mediaTypeKeyName: string,
    acceptHeader: string
}) => string;

export interface IVersioningConfig {
    apiVersion: string;
    versioningStrategy: VersioningStrategy;
    mediaTypeKeyName: string;
    queryStringKeyName: string;
    mediaTypeFormatter?: MediaTypeFormatterFn;
}

export interface IWithVersioningConfig
    extends PickPartial<IVersioningConfig, "mediaTypeKeyName" | "queryStringKeyName"> {
}

// type helper
// @see https://stackoverflow.com/a/53742583
export type PickPartial<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & Partial<Pick<T, K>>