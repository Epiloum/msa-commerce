const express = require('express')
const app = express()
const port = 5001

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.run("CREATE TABLE users (id integer, email text)", () => {
  db.run("INSERT INTO users VALUES (1, 'epiloum@cowave.kr'), (2, 'test@cowave.kr')");
});

app.get('/user', (req, res) => {
  const dat = [];
  let sql = "SELECT * FROM users";

  if (req.query.email) {
    sql += " WHERE email = '" + req.query.email + "'"
  }

  db.all(sql, [], (err, rows) => {
    res.send(rows);
  });
})

app.get('/user/:userId', (req, res) => {
  db.get("SELECT * FROM users WHERE id = " + req.params.userId, [], (err, row) => {
    res.send(row);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
