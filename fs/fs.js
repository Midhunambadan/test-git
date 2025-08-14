
const fs=require('fs')

const path=require('path')
const file=path.join(__dirname,'sample.txt')

fs.writeFile(file,'Hello bro',(err)=>{
    if(err){
        console.log(err)
    }

    console.log('file created')
})


