const express = require("express");
const app = express();

/*from docs ♦️-ref:https://www.npmjs.com/package/swagger-ui-express*/
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");
const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

let courses = [
  {
    id: "11",
    name: "Learn Bootstrap",
    price: 299,
  },
  {
    id: "12",
    name: "Learn MERN Stack",
    price: 399,
  },
  {
    id: "13",
    name: "Learn React",
    price: 899,
  },
];

app.get("/", (req, res) => {
  res.send("Hello from lco");
});

/*(string)=>pass exact routes that we defined in swagger.yaml */
app.get("/api/v1/lco", (req, res) => {
  res.send("This is string base GET request Learning from LCO Docs");
});

/*(handling Objects) */
app.get("/api/v1/lcoobject",(req,res)=>{
    res.send({
        id:1,
        name:"Full Stack",
        price: 999
    })
})

/*(handling array)  */
app.get("/api/v1/courses", (req,res)=>{
  res.send(courses)
})

/*(sending data in URL)  */
app.get("/api/v1/mycourse/:courseId", (req,res)=>{
  const course = courses.find((course) => course.id === req.params.courseId)
  res.send(course);
})

/*(Managing request body throught "POST")*/
app.post("/api/v1/addCourse", (req,res)=>{
  console.log(req.body);
  courses.push(req.body)//we not directly push like that we do more refindment and validation check so we know what exactly is coming up.
  res.send(true)//the data is added.
})



const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}/api-docs`);
});
