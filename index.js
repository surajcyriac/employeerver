const jsonServer=require('json-server')

// create server
const empserver =jsonServer.create()
// setup path fro db.json file
const router=jsonServer.router("db.json")
// creating middleware
const middleWare=jsonServer.defaults()
// making a port for running json server 
const PORT=3000||process.emv.PORT
// use middleware,router
empserver.use(middleWare)
empserver.use(router)
// start server
empserver.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})