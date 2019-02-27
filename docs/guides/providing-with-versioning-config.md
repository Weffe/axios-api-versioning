# Providing a config to `withVersioning()`

> [!NOTE]
> Checkout the API reference for **withVersioning()** [here](api/withVersioning.md)

The `withVersioning()` method takes in an optional config that let's you supply default values for api versioning and the default versioning strategy.

Here we will showcase how to use every single property in the config.

<details open>
<summary>javascript</summary>

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const formatter = ({ apiVersion, mediaTypeKeyName, acceptHeader }) => {
    return `hello/text,${acceptHeader};${mediaTypeKeyName}=${apiVersion}`;
}

const client = withVersioning(baseClient, {
    apiVersion: '1.0.0'
    versioningStrategy: VersioningStrategy.MediaType,
    mediaTypeKeyName: 'version',
    queryStringKeyName: 'api-v',
    mediaTypeFormatter: formatter,
});

client.get('/posts');
```
</details>

Here, we can use the exported types for some extra type safety.

<details open>
<summary>typescript</summary>

```typescript
import axios from 'axios';
import { withVersioning, VersioningStrategy, MediaTypeFormatterFn } from 'axios-api-versioning';

const formatter: MediaTypeFormatterFn = ({ apiVersion, mediaTypeKeyName, acceptHeader }) => {
    return `hello/text,${acceptHeader};${mediaTypeKeyName}=${apiVersion}`;
}

const client = withVersioning(baseClient, {
    apiVersion: '1.0.0'
    versioningStrategy: VersioningStrategy.MediaType,
    mediaTypeKeyName: 'version',
    queryStringKeyName: 'api-v',
    mediaTypeFormatter: formatter,
});

client.get('/posts');
```
</details>