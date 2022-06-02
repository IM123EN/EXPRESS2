const express = require('express')
const router = require('./routes/storesRoute')
const app = express()







app.use('/stores',router)






app.listen(3000, () => console.log('Server ready'))