import express from 'express'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const app=express()
const port=3000;

const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_bVtXtBNqRyVa5AQupmi5UGtXi5eD');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

  app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(port,()=>{
    console.log(`app listening on http://localhost:${port}`)
})
console.log("hi")
