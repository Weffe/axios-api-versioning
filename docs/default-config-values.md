# Default Config Values

> [!NOTE]
> Check out the API reference for `IWithVersioningConfig` [here](api/types/IWithVersioningConfig.md)

When using `withVersioning()`, you have the option to omit certain config values as there are already default values for them.

This is mainly to give you some context when you see the examples of setting the config so that you know what the
default values are.

```typescript
import { IWithVersioningConfig, VersioningStrategy }  from 'axios-api-versioning`;

const defaultWithVersioningConfig: IWithVersioningConfig = {
    mediaTypeKeyName: 'v',
    queryStringKeyName: 'api-version',
}
```
