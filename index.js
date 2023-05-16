
import express from 'express'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');
const port = 3000;
var app = express();
app.get('/', (req, res) => { 
  sdk.getServices({ limit: '20' })
    .then(({ data }) => res.send(data))
    .catch(err => console.error(err));
  // sdk.auth('rnd_b4NkOhh4GRIku6gHd5VBJqXPIvgV');
  sdk.auth('rnd_bVtXtBNqRyVa5AQupmi5UGtXi5eD');
  sdk.getServices({ limit: '20' })
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
})
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})
console.log("hi")

