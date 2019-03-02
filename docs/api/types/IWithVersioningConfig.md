# `IWithVersioningConfig`

> [!NOTE]
> Exported for public use? **Yes**.
> 
> Import Example: 
> ```typescript
> import { IWithVersioningConfig } from 'axios-api-versioning';
> ```

## Type Signature

```typescript
interface IWithVersioningConfig {
    apiVersion?: string;
    versioningStrategy: VersioningStrategy;
    mediaTypeKeyName?: string;
    queryStringKeyName?: string;
    mediaTypeFormatter?: MediaTypeFormatterFn;
}
```