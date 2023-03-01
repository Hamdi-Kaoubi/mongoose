const utilisateur=require('./user')
exports.addUser= async(req,res)=>{
    try {
        const user=new utilisateur(req.body)
        await user.save()
      return  res.status(200).send({msg:"user added",user})
    } catch (error) {
        return res.status(500).send(error)
    }
}
exports.getUser=async(req,res)=>{
    try {
        const user= await utilisateur.find()
        return  res.status(200).send({msg:"user was founded",user})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.deleteUser=async(req,res)=>{
    try {
        await utilisateur.findByIdAndDelete(req.params.id)
        return  res.status(200).send({msg:"user was deleted"})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.editUser=async(req,res)=>{
    try {
        const user= await utilisateur.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        return  res.status(200).send({msg:"user was updated",user})
    } catch (error) {
        return res.status(500).send(error)
    }
}