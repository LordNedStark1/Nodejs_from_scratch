const { log } = require('console')
const fs = require('fs')

// fs.readFile('../docs/installation_commands.txt',(err, data)=>{
//         log(err)
//         log(data.toString())
// })

// log('last line called')
// let fileLocation = '../docs/writeOnFile'
// let sentenceToWrite = `am writing into file with location:: ${fileLocation}, this is your current location`

// fs.writeFile(fileLocation,sentenceToWrite ,()=>{
//     log(`file has been written to :: ${fileLocation}`)
// })

// fs.writeFile("../docs/createdOnTheRun",sentenceToWrite + " This was created on the run",
//         ()=>{
//             log(`file has been written to :: ${"../docs/createdOnTheRun"}`)
//         })


let folderToCreate = '../createdToCheck'
if(!fs.existsSync(folderToCreate)){
fs.mkdir(folderToCreate, (err)=>{
    if (err) log(err)
    else log("folder created")
})
}
else{
     log("folder already exist but will be removed")
     fs.rmdir(folderToCreate, (err)=>{
        if(err) log(err)
        else log("folder has been removed " + folderToCreate)
     })
    }