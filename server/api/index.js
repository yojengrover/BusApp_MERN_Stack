const express = require('express')
const router = express.Router()

require('./routes/info')(router)
require('./routes/user_Info')(router)
require('./routes/ticket')(router)

module.exports=router;
