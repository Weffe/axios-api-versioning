# Using `axios.create()`

[axios](https://github.com/axios/axios#creating-an-instance) provides a `create()` method that allows you to create an `axios`
instance with custom default configuration. This example shows you how could utilize `axios.create()`.

<details open>
<summary>javascript</summary>

```javascript
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