const express=require("express")

const connectdb = require("./connectdb")
const router = require("./routes")
const app=express()
const port=5008
app.use(express.json())
connectdb()
app.use('/api',router)
app.listen(port,console.log("server is running at port: "+port))







