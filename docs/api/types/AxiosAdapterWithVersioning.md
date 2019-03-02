# `AxiosAdapterWithVersioning`

> [!NOTE]
> Exported for public use? **Yes**.
>
> Can be accessed with: `axios-api-versioning/dist/types/axios`
>
> Import Example: 
> ```typescript
> import { AxiosAdapterWithVersioning } from 'axios-api-versioning/dist/types/axios';
> ```

## Type Signature

```typescript
import { AxiosPromise } from 'axios';

interface AxiosAdapterWithVersioning {
    (config: AxiosRequestConfigWithVersioning): AxiosPromise<any>;
}
```