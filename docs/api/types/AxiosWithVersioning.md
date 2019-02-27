# `AxiosWithVersioning`

> [!NOTE]
> Exported for public use? **No**

```typescript
import { AxiosInstance, AxiosStatic } from 'axios';

type AxiosType = AxiosInstance | AxiosStatic;
type WithVersioning = {
    defaults: {
        apiVersion: string;
        versioningStrategy: VersioningStrategy;
    }
}

type AxiosWithVersioning = AxiosType & WithVersioning;
```