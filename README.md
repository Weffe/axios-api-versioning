# axios-api-versioning

[![npm version](http://img.shields.io/npm/v/axios-api-versioning.svg)](https://npmjs.org/package/axios-api-versioning "View this project on npm")
[![Greenkeeper badge](https://badges.greenkeeper.io/Weffe/axios-api-versioning.svg)](https://greenkeeper.io/)

Add easy to manage api versioning to Axios

## Quick Start

### Install

<details open>
<summary>npm</summary>

```bash
npm install --save axios-api-versioning
```
</details>

<details open>
<summary>yarn</summary>

```bash
yarn add axios-api-versioning
```
</details>

### Usage

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning'

// create an axios instance with versioning
// and supply optional default options
const client = withVersioning(axios, {
    apiVersion: '1.0.0',
    versioningStrategy: VersioningStrategy.QueryString
});

client.get('http://example.com', {
    // override default apiVersion
    apiVersion: '2.0.2',
    // override default versioningStrategy
    versioningStrategy: VersioningStrategy.MediaType
})
```

## Documentation

You can visit the online docs here: https://weffe.github.io/axios-api-versioning

## Sandbox - Browser

There is a sandbox example project showcasing the usage in a browser, namely a React App.
But the usage of `axios-api-versioning` is what matters. 

[Learn more here](./sandbox/browser/README.md)

# License

MIT