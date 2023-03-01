const express=require('express')
const { addUser, getUser, deleteUser, editUser } = require('./controlles')
const router=express.Router()
router.post("/",addUser)
router.get("/get",getUser)
router.delete("/del/:id",deleteUser)
router.put("/edit/:id",editUser)
module.exports=router