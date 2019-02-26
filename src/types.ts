import { AxiosInstance, AxiosStatic } from 'axios';

type AxiosType = AxiosInstance | AxiosStatic;
type WithVersioning = {
    defaults: {
        apiVersion: string;
        versioningStrategy: VersioningStrategy;
    }
}

export type AxiosWithVersioning = AxiosType & WithVersioning;

export enum VersioningStrategy {
    QueryString = 'QUERY_STRING',
    UrlPath = 'URL_PATH',
    MediaType = 'MEDIA_TYPE'
}

export interface IVersioningConfig {
    versioningStrategy: VersioningStrategy;
    mediaTypeKeyName: string;
    queryStringKeyName: string;
}

export interface IWithVersioningConfig extends PickPartial<IVersioningConfig, "mediaTypeKeyName" | "queryStringKeyName"> {
    apiVersion?: string;
}

/**
 * modify the global axios type of AxiosRequestConfig
 * to add "apiVersion" & "versioningStrategy" to config object
 */
declare module "axios" {
    interface AxiosRequestConfig {
        apiVersion?: string;
        versioningStrategy?: string
    }
}

// type helper
// @see https://stackoverflow.com/a/53742583
type PickPartial<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & Partial<Pick<T, K>>