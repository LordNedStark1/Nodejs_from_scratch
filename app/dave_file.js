const { log } = require('console');
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'files', 'starter.txt'),'utf8',(err, data)=>{
    if(err) throw err;
    log(data)
})