const User=require("../model/user")

const userContrll={}

userContrll.create=(req,res)=>{
  const body=req.body
  const user=new User(body)
  user.save()
  .then((user)=>{
    console.log(user)
     res.json(user)
  })
  .catch((err)=>{
    res.json(err.message)
  })
}

module.exports=userContrll