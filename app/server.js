const { log } = require('console');
const path = require('path')
const os = require('os')
log(os.type());
log(os.version());
log(os.homedir());

log(__dirname);
log(__filename);

log(path.dirname(__filename))
log(path.basename(__filename))
log(path.extname(__filename))

log(path.parse(__filename))