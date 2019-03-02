# `AxiosResponseWithVersioning`

> [!NOTE]
> Exported for public use? **Yes**.
>
> Can be accessed with: `axios-api-versioning/dist/types/axios`
>
> Import Example: 
> ```typescript
> import { AxiosResponseWithVersioning } from 'axios-api-versioning/dist/types/axios';
> ```

## Type Signature

```typescript
import { AxiosResponse } from 'axios';

interface AxiosResponseWithVersioning<T = any> extends AxiosResponse {
    config: AxiosRequestConfigWithVersioning;
}
```