const express = require('express')
const app = express()
const port = 3002
const apiService = require('./libs/api.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.static('../public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/orders.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
