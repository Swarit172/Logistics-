const express = require('express')
const path = require('path')

const app = express()

const staticpath = path.join(__dirname, './public')
app.use(express.static(staticpath)) 


const port = 9090
app.listen(port , () => {
    console.log(`Run it on localhost${port}`)
})





