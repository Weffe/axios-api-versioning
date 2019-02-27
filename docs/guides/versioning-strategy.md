# Versioning Strategy

There are three versioning strategies:

1. Query String
2. Url Path
3. Media Type

Each has their own pros and cons but which one to use is up to you.

##  Query String

The `QueryString` strategy appends the api version as a query parameter.
To use this strategy, set it in the config:

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const client = withVersioning(axios, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.QueryString
});

client.get('http://example.com');
```

The url of the **get** request will look like:

```http
http://example.com?api-version=1
```

## Url Path

The `UrlPath` strategy takes the approach of string replacing the template name, `{apiVersion}`,
inside the url.

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const client = withVersioning(axios, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.UrlPath
});

client.get('http://example.com/v{apiVersion}/posts');
```

The url of the **get** request will look like:

```http
http://example.com/v1/posts
```

If you are curious how you could use this with the `baseURL` property 
in the `axios` config then head [here](guides/using-axios-create?id=usage-with-versioningstrategyurlpath).

## Media Type

The `MediaType` strategy sets the api version inside the **Accept Header**. 
This strategy is a little bit more involved because there are 2 known ways to support this.

1. Provide api version via an `accept-param`
2. Provide api version via a custom `media-type`

### `accept-param`

By default, `axios-api-versioning` takes the approach of providing the api version as an accept param inside
the **Accept Header**.

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const client = withVersioning(axios, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.MediaType
});

client.get('http://example.com');
```

The **Accept Header** will then look like this:

```http
Accept: application/json, text/plain, */*; v=1
```

#### References

- https://github.com/Microsoft/aspnet-api-versioning/wiki/Versioning-by-Media-Type

### `media-type`

Providing a custom media type requires some extra work as you would need to provide a
custom **Accept Header** formatter to `withVersioning()`.

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

// let's hardcode the accept value and custom media type
const formatter = ({ apiVersion }) => {
    return `application/vnd.mycompany.v${apiVersion}+json`;
}

const client = withVersioning(axios, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.MediaType
    mediaTypeFormatter: formatter
});

client.get('http://example.com');
```

The **Accept Header** will then look like this:

```http
Accept: application/vnd.mycompany.v1+json
```

#### References

- http://barelyenough.org/blog/2008/05/versioning-rest-web-services/
- https://developer.github.com/v3/

### How are REST APIs versioned?

This page shows a list of websites and discussions about how to version your API.
This might be useful on deciding which versioning strategy best fits your application.

http://www.lexicalscope.com/blog/2012/03/12/how-are-rest-apis-versioned/
