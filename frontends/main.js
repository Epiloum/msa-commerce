const express = require('express')
const app = express()
const port = 3000
const apiService = require('./libs/api.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.static('../public'));

app.get('/', (req, res) => {
  res.redirect('/login/frm')
})

app.get('/login/frm', (req, res) => {
  res.sendFile(__dirname + '/templates/login.html');
})

app.post('/login/proc', (req, res) => {
  apiService.user.login(req.body.email, req.body.pswd).then((data) => {
    if (data.success) {
      res.cookie('email', req.body.email, {expires: 0});
        res.redirect('/main')
    } else {
      res.send("<script>alert('NOT exists user'); location.back();</script>");
    }
  });
})

app.get('/main', (req, res) => {
  res.sendFile(__dirname + '/templates/main.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
