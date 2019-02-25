import { AxiosInstance, AxiosStatic } from 'axios';

type InstanceType = AxiosInstance | AxiosStatic;
export type AxiosWithVersioning = InstanceType & IWithVersioning;

interface IWithVersioning {
    defaults: {
        apiVersion: string;
        versioningStrategy: VersioningStrategy;
    }
}

export enum VersioningStrategy {
    QueryString = 'QUERY_STRING',
    UrlPath = 'URL_PATH',
    MediaType = 'MEDIA_TYPE'
}

export interface IWithVersioningConfig {
    apiVersion?: string;
    versioningStrategy: VersioningStrategy;
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