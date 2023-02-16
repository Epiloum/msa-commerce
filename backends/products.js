const express = require('express')
const app = express()
const port = 5002

app.use(cookieParser());

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.run("CREATE TABLE products (id integer, email text, title text, price integer)", () => {
  db.run("INSERT INTO products VALUES (1, 'epiloum@cowave.kr', 'Apple', 7500)");
});

app.get('/', (req, res) => {
  if (req.cookies.email) {
    db.all("SELECT * FROM products WHERE email = '" + req.cookies.email + "'", [], (err, rows) => {
      res.send(rows);
    });
  } else {
    res.send([]);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
