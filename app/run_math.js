const { log } = require('console')
const math = require('./math')
const {add, subtract, divide} = require('./math')

log(add(2,3))
log(subtract(5, 6))
log(divide(2,2))
log(math.multiply(3,4))