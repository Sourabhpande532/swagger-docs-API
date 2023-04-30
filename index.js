const express = require("express");
const app = express();

/*from docs ♦️-ref:https://www.npmjs.com/package/swagger-ui-express*/
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");
const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);
const fileUpload = require("express-fileupload") //Object

/*Again As told you in case want to handled anyother thing in case of json,req.body and anything you need use as a middleware belew one 👇*/

/*middleware*/
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(fileUpload());

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

/*🧠🧠(string)=>pass exact routes that we defined in swagger.yaml🧠🧠 */
app.get("/api/v1/lco", (req, res) => {
  res.send("This is string base GET request Learning from LCO Docs");
});

/*🧠🧠(handling Objects)🧠🧠 */
app.get("/api/v1/lcoobject", (req, res) => {
  res.send({
    id: 1,
    name: "Full Stack",
    price: 999,
  });
});

/*(handling array)  */
app.get("/api/v1/courses", (req, res) => {
  res.send(courses);
});

/*(🧠🧠sending data in URL🧠🧠)  */
app.get("/api/v1/mycourse/:courseId", (req, res) => {
  const course = courses.find((course) => course.id === req.params.courseId);
  res.send(course);
});

/*(🧠🧠Managing request body throught "POST"🧠🧠)*/
app.post("/api/v1/addCourse", (req, res) => {
  console.log(req.body);
  courses.push(req.body); //we not directly push like that we do more refindment and validation check so we know what exactly is coming up.
  res.send(true); //the data is added.
});

/* 🧠🧠handling url query in swaggar🧠🧠 */
app.get("/api/v1/coursequery", (req, res) => {
  let location = req.query.location;
  let device = req.query.device;
  let size = req.query.size
  res.send({
    location,
    device,
    size
  });
});

/*👆👋 
-@-we need to pass name here as usually we send in HTML form e.g name,email,password..
-@-we'r just takeing 3 parameter here and send through via object  */


/* 🧠🧠handling images in swagger🧠🧠 */
app.post("/api/v1/courseupload",(req,res)=>{
  console.log(req.headers);
  const file = req.files.file;
  if(!file){
    return res.status(400).send('No file uploaded.');
  }
  let path = __dirname + "/Images/" + Date.now() + ".jpg";
  file.mv(path,(err)=>{
    if(err){
      console.log(err);
      return res.status(500).send(err);
    }
    res.send('File uploaded!');
  })
})


/*👆👋
feel free to add name anyname but ensure that frontend one is supposed to be same name after name
-@- you need to tell explicitely where you want to move files mense define 
  path like __dirname + "./Images/" +(want to rename this there are lot of ways to rename this 😍😍 you can generate a unique id, you can use packages like -uuid which can give some unique name in this one we've mentioned Date.now() + ".jpg" it's not idea way but it's a easy way to stored the images & saves a lot of time form servers) yes ther are specific module which shrink the file and lower down quality but later discuss
 -@- file.mv()<= it expect two parameter
  Note: additionaly you can store path this into DBs
 */

const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}/api-docs`);
});
