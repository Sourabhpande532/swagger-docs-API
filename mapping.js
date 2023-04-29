/*
♦️♦️♦️Step By Step Guideline ♦️♦️♦️
📶Process
♦️ -mkdir folderName
♦️ -npm i -y
♦️ -install packages(express,swagger-ui-express,yaml,nodemon)
♦️ @ref:🔗https://www.npmjs.com/package/swagger-ui-express
♦️ @ref:🔗https://swagger.io/docs/specification/about/

📶📶create files
♦️ -nodemon.json
♦️ -index.js
♦️ -swagger.yaml

📶📶Start writing Docs
♦️ -inside swagger.yaml(e.g openapi: 3.0.0)

📶📶Authentication and Authorization inside swagger.yaml file after 👻"enum"
🔗🛕https://swagger.io/docs/specification/authentication/
♦️ - in this video we'r talked about securitySchema if you'll be working on- 
    complex project it is obvious you've to write some protected routes 
♦️ - required some tokens in your browser token can be it into header,cookies
🏃‍♀️🏃‍♂️@working on components: securitySchemes (you can defines as securitySchema,swagger actually know it can be come from cookies,may be some place so it provide lot of options for further proceeds)-

-*🛕cookieAuth:(your authentication can be made by cookies,probably http only)
-*🛕type: apiKey(Always caseSensitive)
-*🛕in: cookie(it is going to come acutully in cookies)
-*🛕name: token(provide a name here as a token)      

🏃‍♀️🏃‍♂️@working As soon as you add this this one 👇 probably commeit mistacks fistst it shoud be caseSensetive come it from above link.
-*🛕 BearerAuth:
      type: http
      scheme: bearer
-*🛕(sideNote knowledge: what does that ApiKeyAuth: beside BearerAuth in above link may be you'r desiging some kind of programe and application which is restricting people how often you use you'r api or you can heat the request so in that case you go with that.)

📶📶string base GET request (after 👋components portion) in swagger.yaml file.
♦️ - in this we'r going to create very basic simple routes which return a string it can return object as well.
♦️ - in this one we explore express for handling request as well as response becz lot of data is coming from servers and going to servers in multiple formate string,objects,files.
♦️ - create Arrys(don't use const bcz we want to modify later)
♦️ - create get routes(we'll keep route as it is make sure you use "servers" url that we defined in swagger.ymal just mention as it is)

♦️🛕❕ - one thing always confuse to lot of people No matter what kind of routes are doing. may be for products,user,for products,for categories,for courses,whatever it all comes under one umbrella which is know as 👋😗"paths" that you can say its drawback for yaml but for temporary use you can use. sideNote there are some CLI tool provide by yaml "self explore❕ that combine all the yaml file"
♦️ - mention exact routes last name e.g lco go and check.

📶📶handling object=> just similar above one instead of string we need to pass object in the form of key:part usually know as "properties"
👋😗Fact always use properties when key:pair found


📶handling array in swagger
  -we are handling array here go and take a look on index.js see courser array.
  😗Notice: exact routes you need to pass in swagger.yaml that you were passed in index.js e.g /api/v1/courses 
  !courses is very important.
   when the time comes introduced the array in object we defined "properties" after type 
   But in array perfect thing to inside array content is know as use "items"

📶📶sending data in URL()
🕺in this one we want to pass something into Database or you can say backend in this case & base on that particular value we'll be getting some result so there are variety of ways how you can send some info to backend it can go through Url,also knows as parameter,paths all is one for single thing. or also proper parameters likes forms and request body & upper body.

😶‍🌫️how it work just go index.js create routes - mycourse & then write some docs in yaml.
🧠explanation: /api/v1/mycourse/:courseId
- what is :courseId above?? => because we expect some information will come from url

swaggar.yaml => mycourse{...}<= Here, need to pass this curly brases because some taking from parameter


📶📶Manging request body in swagger
in this one we'r going to talk about "post" request As previously we've seen data can come throught URL,in rugular one,throught parameter couple of ways majority of times this is one way & 2nd way is that coming up the data from body "itself" it can be in form, or it can be in the formate of json.
😶‍🌫️Now express is well know for handling both of the data with the similar kind of approach you don't need to worry until or unless the photo/image will come "we'll later discuss on separate video" in this the data is coming only json formate

😶‍🌫️As soon as the data is coming with json You need to use "app.use()" Now this is middleware this helps us to cross data in between. so when the data goes into express and it available for you some process that's need to happend in between
so that we've to use
😶‍🌫️app.use(express.json()) now this is kind of body parser previous day body parser was not part of express we need to install separately so in that case what we were doing we just crate a variable and require body express and pass it on here as a middleware. but we can use in express also default.  

 How it work on let see.
 😶‍🌫️we get some data into body + push data into array + return message as simple as that.
 😶‍🌫️app.post
 😶‍🌫️write docs in swagger.yaml
 https://swagger.io/docs/specification/describing-request-body/
 
😶‍🌫️for passing some data into body
 previously we use parameters but now use "requestBody" previously it was send data "in" e.g in params, in body like that Now we send some body we go through "requestBody"
 
 
📶📶handling url querry in swaggar(search)
- it is very important for you to understand how data comes with querry it is very important thing that you'r doing sepecially in the case of "search" page in most of the cases what you'r going to notice Somebuddy type in the search bar or even when you seach on google while searching.
e.g
🛕let's you are in shopping website and you want "John ceana" tshrt what you usually do you just go on search bar of shopping website and type it & then it will gain how you will you get such thing???? don't you have Question?? all process happend in Backend.
In the Backend i have to loop through how i'm gonna to handled that but most important part the data is coming through "query" itself.

e.g 
🛕same website on shopping let's there is tshrt between the range 300 to 400Rs this all thing will be handled into the query itself it is very imp for you to understand how it comes up and take data.

📶📶handling images in swagger
- a lot of people get affraid of as soon as there file being uploaded or image being uploaded & they found all the time it's confusing how to handled the images it's ok to confuse bez images by default is not a part of exprss itself expres don't know how to handled this kind of binary data images,pdf & whatever that usually there are other tool to handled that one of them is 😶‍🌫️"multer" is quite famous one lot more there. but in this we install belew one.

  -♦️-🖇️https://www.npmjs.com/package/express-fileupload
  -♦️-  npm i express-fileupload
  -♦️-  app.post('/upload', function(req, res) {
  console.log(req.files.foo); // the uploaded file object
  });

  -@- explain:=> As soon as you see "/upload" something in the routes it will 
             Give you a access through req.files just like you get
             req.body or whatever the files get uploaded .foo is 
             responsible for whatever you naming it at the time of 
             defining in the frontend form. remember user,name,email
             you can upload multiple where if you click one of them examples: it will give you a source code:👇
             🖇️https://github.com/richardgirges/express-fileupload/tree/master/example
             -@- explain: you will notice over there (the name I was talking about)
              a)<input type="file" name="sampleFile" />
                <input type='submit' value='Upload!' />
              b)The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
              -sampleFile = req.files.sampleFile;
              -uploadPath = __dirname + '/somewhere/on/your/server/' + sampleFile.name; 
              🧐 then what you do after the image being uploaded it's all up to you where you exactly what to upload is it on firebase,AWS,cloundary,or files anywhere however you want to handled that. 
              in this one we just uploaded on folder /images. <- all of the images will be move up here.
              let's go on 📂index.js





*/
