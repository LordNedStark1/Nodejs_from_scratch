const { log } = require("console")

const greet = (greetWithName) =>{
    log(`Hello ${greetWithName}, how are you doing.`)
}

// greet("ned")

global.setTimeout(()=>{
    log("time out called")
    clearInterval(interval)
}, 3000)
const interval = global.setInterval(()=>{
    log("interval called")
}, 1000)