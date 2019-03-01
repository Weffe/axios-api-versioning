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

const client = withVersioning(baseClient, {
    apiVersion: '1',
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

const client = withVersioning(baseClient, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.MediaType
});

client.get('/posts');
```
</details>

## Usage with `VersioningStrategy.UrlPath`

You can take advantage of the `baseURL` property in the `axios` config to set where your `apiVersion` will be set.

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const baseClient = axios.create({
    baseURL: 'http://example.com/api/v{apiVersion}',
    timeout: 5000,
})

const client = withVersioning(baseClient, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.UrlPath
});

client.get('/posts');
```

The url of the **get** request will look like:

```http
http://example.com/api/v1/posts
```