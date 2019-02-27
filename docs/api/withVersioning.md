# `withVersioning()`

This method returns a new instance of the provided axios instance that's configured to manage api versioning.

```typescript
import { AxiosInstance, AxiosStatic } from 'axios';

function withVersioning(
    instance: AxiosInstance | AxiosStatic,
    config?: IWithVersioningConfig
): AxiosWithVersioning
```

## Type References

Here are some quick links to the types that are used in `withVersioning()`.

- [IWithVersioningConfig](api/types/IWithVersioningConfig.md)
- [AxiosWithVersioning](api/types/AxiosWithVersioning.md)