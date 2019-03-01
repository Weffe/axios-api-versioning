# `AxiosAdapterWithVersioning`

> [!NOTE]
> Exported for public use? **No**

```typescript
import { AxiosPromise } from 'axios';

interface AxiosAdapterWithVersioning {
    (config: AxiosRequestConfigWithVersioning): AxiosPromise<any>;
}
```