const mongoose=require("mongoose")

const Schema=mongoose.Schema

const userSchema=new Schema({
    title:{
        type:String,
        require:true
        
        
    },

    options:[
      {
        title:String,
       
      }
    ]
   
}, { versionKey: false })


const User=mongoose.model("User",userSchema)

const doc = new User({
  title: ' what is javascripts',
  options: [{ title: 'loosley' }]
})



doc.save()

console.log(Array.isArray(doc.options))


module.exports=User