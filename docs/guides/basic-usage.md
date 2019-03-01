# Basic Usage

Here is an example of very basic usage. It demonstrates creating an axios instance with versioning and using it in your app.

<details open>
<summary>javascript</summary>

```javascript
import axios from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';

const config = {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.QueryString
}

const client = withVersioning(axios, config);

client.get('http://example.com');
```
</details>

<details open>
<summary>typescript</summary>

```typescript
import axios from 'axios';
import { withVersioning, VersioningStrategy, IWithVersioningConfig } from 'axios-api-versioning';

const config: IWithVersioningConfig = {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.QueryString
}

const client = withVersioning(axios, config);

client.get('http://example.com');
```
</details>
