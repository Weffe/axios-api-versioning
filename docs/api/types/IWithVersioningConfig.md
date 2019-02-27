# `IWithVersioningConfig`

> [!NOTE]
> Exported for public use? **Yes**

```typescript
interface IWithVersioningConfig {
    apiVersion?: string;
    versioningStrategy: VersioningStrategy;
    mediaTypeKeyName?: string;
    queryStringKeyName?: string;
    mediaTypeFormatter?: MediaTypeFormatterFn;
}
```