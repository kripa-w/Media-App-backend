//1 import json server
const jsonServer=require('json-server')

//2 create server application using json server
const mediaAppServer=jsonServer.create()

//3 create a miiddleware used by json server
const miiddleware=jsonServer.defaults()

//4 create router:set up router for db.json file
const router=jsonServer.router('db.json')

//5 applying middleware to server
mediaAppServer.use(miiddleware)

//6 applying router to server
mediaAppServer.use(router)

//7 define post
const PORT=3000

//8 starting the server
mediaAppServer.listen(PORT,()=>{
    console.log("Media app Server started on the port"+PORT);
})