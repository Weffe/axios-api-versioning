# `AxiosRequestConfigWithVersioning`

> [!NOTE]
> Exported for public use? **Yes**.
>
> Can be accessed with: `axios-api-versioning/dist/types/axios`
>
> Import Example: 
> ```typescript
> import { AxiosRequestConfigWithVersioning } from 'axios-api-versioning/dist/types/axios';
> ```

## Type Signature

```typescript
import { AxiosRequestConfig } from 'axios';

interface AxiosRequestConfigWithVersioning extends AxiosRequestConfig {
    apiVersion?: string;
    versioningStrategy?: string;
    adapter?: AxiosAdapterWithVersioning;
}
```