# `AxiosErrorWithVersioning`

> [!NOTE]
> Exported for public use? **Yes**.
>
> Can be accessed with: `axios-api-versioning/dist/types/axios`
>
> Import Example: 
> ```typescript
> import { AxiosErrorWithVersioning } from 'axios-api-versioning/dist/types/axios';
> ```

## Type Signature

```typescript
interface AxiosErrorWithVersioning extends Error {
    config: AxiosRequestConfigWithVersioning;
}
```