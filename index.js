const express = require('express')
const app = express()

app.get('/', (request, response) => {
  console.log(response)
  response.send('Hello World !')
})

app.get('/date', (request, respose) => {
  let date = new Date()
  respose.send(`Today's date is ${date}`)
})

app.get('/page', (request, response) => {
  response.sendfile('./page.html', {root: __dirname})
})

app.listen(3000)
