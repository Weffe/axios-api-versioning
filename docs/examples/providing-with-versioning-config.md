# Providing a config to `withVersioning()`

> [!NOTE]
> Checkout the API reference for **withVersioning()** [here](#)

The `withVersioning()` method takes in an optional config that let's you supply default values for api versioning and the default versioning strategy.

Here we will showcase how to use every single property in the config.

<details open>
<summary>javascript</summary>

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const client = withVersioning(baseClient, {
    versioningStrategy: VersioningStrategy.MediaType,
});

client.get('/posts');
```
</details>

<details open>
<summary>typescript</summary>

```typescript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const baseClient = axios.create({
    baseURL: 'http://example.com',
    timeout: 5000,
})

// setting a different default Versioning Strategy
const client = withVersioning(baseClient, {
    versioningStrategy: VersioningStrategy.MediaType
});

client.get('/posts');
```
</details>