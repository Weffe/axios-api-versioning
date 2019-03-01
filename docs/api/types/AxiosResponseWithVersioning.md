# `AxiosResponseWithVersioning`

> [!NOTE]
> Exported for public use? **No**

```typescript
import { AxiosResponse } from 'axios';

interface AxiosResponseWithVersioning<T = any> extends AxiosResponse {
    config: AxiosRequestConfigWithVersioning;
}
```