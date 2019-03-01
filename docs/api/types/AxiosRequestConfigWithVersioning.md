# `AxiosRequestConfigWithVersioning`

> [!NOTE]
> Exported for public use? **No**

```typescript
import { AxiosRequestConfig } from 'axios';

interface AxiosRequestConfigWithVersioning extends AxiosRequestConfig {
    apiVersion?: string;
    versioningStrategy?: string;
    adapter?: AxiosAdapterWithVersioning;
}
```