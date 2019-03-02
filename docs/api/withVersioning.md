# `withVersioning()`

This method returns a new instance of the provided axios instance that's configured to manage api versioning.

> [!NOTE]
> Exported for public use? **Yes**.
> 
> Import Example: 
> ```typescript
> import { withVersioning } from 'axios-api-versioning';
> ```

## Type Signature

```typescript
import { AxiosInstance, AxiosStatic } from 'axios';

function withVersioning(
    instance: AxiosInstance | AxiosStatic,
    config?: IWithVersioningConfig
): AxiosInstanceWithVersioning
```

## Type References

Here are some quick links to the types that are used in `withVersioning()`.

- [IWithVersioningConfig](api/types/IWithVersioningConfig.md)
- [AxiosInstanceWithVersioning](api/types/AxiosInstanceWithVersioning.md)