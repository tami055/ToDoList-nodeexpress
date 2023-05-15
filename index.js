import express from 'express'
// import require from 
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const app=express()
const port=3000;

const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');


sdk.auth('rnd_AfB7Rcwi3jNhb2Hzb5x2fjWN5bwN');
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
