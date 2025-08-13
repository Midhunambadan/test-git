
const express=require('express')
const app=new express()

app.get('/',(req,res)=>{
    res.send('hello buddy')
})

app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})