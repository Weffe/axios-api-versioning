# Set Custom Key Name

This feature is only available when your versioning strategy is set to `QueryString` or `MediaType`.

By default, the key name of the api version is `api-version` when `QueryString` is set.
Or it is `v` when `MediaType` is set.

This is nice only if your backend has the same key name for the api version. But more then likely
you will need to customize it.

## QueryString

Here's how you can set a custom key name for `QueryString`.

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const client = withVersioning(axios, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.QueryString,
    queryStringKeyName: 'my-api-version'
});

client.get('http://example.com')
```

When making the **get** request, the URL will look like:

```http
http://example.com?my-api-version=1
```

## MediaType

Here's how you can set a custom key name for `MediaType`.

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const client = withVersioning(axios, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.MediaType,
    mediaTypeKeyName: 'my-api-version'
});

client.get('http://example.com')
```

When making the **get** request, the Accept Header will look like:

```http
Accept: application/json, text/plain, */*; my-api-version=1
```