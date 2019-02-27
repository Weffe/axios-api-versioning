# `MediaTypeFormatterFn`

> [!NOTE]
> Exported for public use? **Yes**

This is used to format the value of the **Accept Header** and can only be used when your versioning strategy is `VersioningStrategy.MediaType`. Use this when you want to manually format the **Accept Header** value yourself. Make sure to return a string or else things might break.

```typescript
type MediaTypeFormatterFn = (data: {
    apiVersion: string,
    mediaTypeKeyName: string,
    acceptHeader: string
}) => string;
```