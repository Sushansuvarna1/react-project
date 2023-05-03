const mongoose=require("mongoose")

const configDB=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/pro-task")
    .then(()=>{
        console.log("DB is connected")
    })
    .catch((err)=>{
        console.log(err.message)
    })
}
module.exports=configDB

