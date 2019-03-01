import { IVersioningConfig, PickPartial } from './types';

export const defaultWithVersioningConfig: PickPartial<IVersioningConfig, "apiVersion" | "versioningStrategy"> = {
    mediaTypeKeyName: 'v',
    queryStringKeyName: 'api-version',
}