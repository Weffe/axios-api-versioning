import { IWithVersioningConfig, VersioningStrategy } from './types';

export const defaultWithVersioningConfig: IWithVersioningConfig = {
    versioningStrategy: VersioningStrategy.QueryString,
    mediaTypeKeyName: 'v',
    queryStringKeyName: 'api-version',
}