/*
♦️♦️♦️Step By Step Guideline ♦️♦️♦️
📶Process
♦️ -mkdir folderName
♦️ -npm i -y
♦️ -install packages(express,swagger-ui-express,yaml,nodemon)
♦️ @ref:🔗https://www.npmjs.com/package/swagger-ui-express
♦️ @ref:🔗https://swagger.io/docs/specification/about/

📶create files
♦️ -nodemon.json
♦️ -index.js
♦️ -swagger.yaml

📶Start writing Docs
♦️ -inside swagger.yaml(e.g openapi: 3.0.0)

📶Authentication and Authorization inside swagger.yaml file after 👻"enum"
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

📶string base GET request (after 👋components portion) in swagger.yaml file.
♦️ - in this we'r going to create very basic simple routes which return a string it can return object as well.
♦️ - in this one we explore express for handling request as well as response becz lot of data is coming from servers and going to servers in multiple formate string,objects,files.
♦️ - create Arrys(don't use const bcz we want to modify later)
♦️ - create get routes(we'll keep route as it is make sure you use "servers" url that we defined in swagger.ymal just mention as it is)

♦️🛕❕ - one thing always confuse to lot of people No matter what kind of routes are doing. may be for products,user,for products,for categories,for courses,whatever it all comes under one umbrella which is know as 👋😗"paths" that you can say its drawback for yaml but for temporary use you can use. sideNote there are some CLI tool provide by yaml "self explore❕ that combine all the yaml file"
♦️ - mention exact routes last name e.g lco go and check.

📶handling object=> just similar above one instead of string we need to pass object in the form of key:part usually know as "properties"
👋😗Fact always use properties when key:pair found


📶handling array in swagger
  -we are handling array here go and take a look on index.js see courser array.
  😗Notice: exact routes you need to pass in swagger.yaml that you were passed in index.js e.g /api/v1/courses 
  !courses is very important.
   when the time comes introduced the array in object we defined "properties" after type 
   But in array perfect thing to inside array content is know as use "items"

📶sending data in URL()
🕺in this one we want to pass something into Database or you can say backend in this case & base on that particular value we'll be getting some result so there are variety of ways how you can send some info to backend it can go through Url,also knows as parameter,paths all is one for single thing. or also proper parameters likes forms and request body & upper body.

😶‍🌫️how it work just go index.js create routes - mycourse & then write some docs in yaml.
🧠explanation: /api/v1/mycourse/:courseId
- what is :courseId above?? => because we expect some information will come from url

swaggar.yaml => mycourse{...}<= Here, need to pass this curly brases because some taking from parameter



*/