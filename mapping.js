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
*/