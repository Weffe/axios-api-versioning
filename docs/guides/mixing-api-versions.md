# Mixing API Versions

In the event that you are updating your API to the next version but have not updated every single route.
Then, you have two options on how to mix different API versions in your `axios` clients.

## First Option

This should be the preferred option. Let's say you have `v1` of your API and it's being updated to `v2`. The easiest and most sensible solution is just to create a separate `axios` client with `v2` as its `apiVersion`.

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const clientV1 = withVersioning(axios, {
    apiVersion: '1.0.0'
    versioningStrategy: VersioningStrategy.QueryString
});

const clientV2 = withVersioning(axios, {
    apiVersion: '2.0.0'
    versioningStrategy: VersioningStrategy.QueryString
});
```

Then, just replace the `clientV1` calls with `clientV2`!

```diff
- clientV1.get('http://example.com')
+ clientV2.get('http://example.com')
```

## Second Option

If you just need to quickly set the different `apiVersion`, then follow the guide for [Overriding Api Config](guides/overriding-api-config.md).

tl;dr

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const client = withVersioning(axios, {
    apiVersion: '1.0.0'
    versioningStrategy: VersioningStrategy.QueryString
});

client.get('http://example.com, {
    apiVersion: '2.0.0' // override the apiVersion for this request only
})
```