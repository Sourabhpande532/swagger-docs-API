const express = require('express');
const app = express();


/*from docs ♦️-ref:https://www.npmjs.com/package/swagger-ui-express*/
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')
const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.get("/",(req,res)=>{
    res.send("Hello from lco")
})
const port = process.env.port || 8000
app.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}/api-docs`);
})