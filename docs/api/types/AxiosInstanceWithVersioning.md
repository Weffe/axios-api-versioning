# `AxiosInstanceWithVersioning`

> [!NOTE]
> Exported for public use? **Yes**.
>
> Can be accessed with: `axios-api-versioning/dist/types/axios`
>
> Import Example: 
> ```typescript
> import { AxiosInstanceWithVersioning } from 'axios-api-versioning/dist/types/axios';
> ```

## Type Signature

```typescript
import { AxiosPromise, AxiosInterceptorManager } from 'axios';

interface AxiosInstanceWithVersioning {
    (config: AxiosRequestConfigWithVersioning): AxiosPromise;
    (url: string, config?: AxiosRequestConfigWithVersioning): AxiosPromise;
    defaults: AxiosRequestConfigWithVersioning;
    interceptors: {
        request: AxiosInterceptorManager<AxiosRequestConfigWithVersioning>;
        response: AxiosInterceptorManager<AxiosResponseWithVersioning>;
    };
    getUri(config?: AxiosRequestConfigWithVersioning): string;
    request<T = any, R = AxiosResponseWithVersioning<T>>(config: AxiosRequestConfigWithVersioning): Promise<R>;
    get<T = any, R = AxiosResponseWithVersioning<T>>(url: string, config?: AxiosRequestConfigWithVersioning): Promise<R>;
    delete<T = any, R = AxiosResponseWithVersioning<T>>(url: string, config?: AxiosRequestConfigWithVersioning): Promise<R>;
    head<T = any, R = AxiosResponseWithVersioning<T>>(url: string, config?: AxiosRequestConfigWithVersioning): Promise<R>;
    post<T = any, R = AxiosResponseWithVersioning<T>>(url: string, data?: any, config?: AxiosRequestConfigWithVersioning): Promise<R>;
    put<T = any, R = AxiosResponseWithVersioning<T>>(url: string, data?: any, config?: AxiosRequestConfigWithVersioning): Promise<R>;
    patch<T = any, R = AxiosResponseWithVersioning<T>>(url: string, data?: any, config?: AxiosRequestConfigWithVersioning): Promise<R>;
}
```