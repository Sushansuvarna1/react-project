const express=require("express")
const cors=require("cors")
const configDB=require('./config/database')
const userContrll=require("./app/controller/userContrll")
const app=express()
const port=3060

app.use(express.json())
app.use(cors())
configDB()

app.post('/api/title',userContrll.create)

app.listen(port,()=>{
    console.log("server is running on port",port)
})