# Basic Usage

Here is an example of very basic usage. It demonstrates creating an axios instance with versioning and using it in your app.

<details open>
<summary>javascript</summary>

```javascript
import axios from 'axios';
import { withVersioning } from 'axios-api-versioning';

// Note: The default VersioningStrategy is QueryString
const client = withVersioning(axios);

client.get('http://example.com');
```
</details>

<details open>
<summary>typescript</summary>

```typescript
import axios from 'axios';
import { withVersioning } from 'axios-api-versioning';

// Note: The default VersioningStrategy is QueryString
const client = withVersioning(axios);

client.get('http://example.com');
```
</details>
