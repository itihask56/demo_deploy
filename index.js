require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/signup', (req, res)=>{
    res.send("<h1>This is a signup page</h1>")
})
app.get('/login',(req, res) => {
    res.send("This is a login page");
})
 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})