# Overriding API Config

## Per Request

You have the ability to override `apiVersion` and `versioningStrategy` on a per request basis.

This can be accomplished by so:

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const client = withVersioning(axios, {
    apiVersion: '1.0.0'
    versioningStrategy: VersioningStrategy.QueryString
});

client.get('http://example.com, {
    apiVersion: '2.0.0', // override the apiVersion for this request only
    versioningStrategy: VersioningStrategy.MediaType // override the versioningStrategy for this request only
})
```