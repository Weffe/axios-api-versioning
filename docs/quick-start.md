# Quick Start

## Install

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

## Example Usage


```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

// create an axios instance with versioning
// and versioning config
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