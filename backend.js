const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(express.static('kepek'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kerdes', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat_adatb'
    })
    
    connection.connect()
    
    connection.query('SELECT * from kerdes', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)

      res.send(rows)
    })
    
    connection.end()    

  })


  app.get('/kereses', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat_adatb'
    })
    
    connection.connect()
    
    connection.query('SELECT * from kerdes', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)

      res.send(rows)
    })
    
    connection.end()    

  })
/*-------------------------------------------------------------------*/



app.get('/termekek', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat_adatb'
  })
  
  connection.connect()
  
  connection.query('SELECT * from termekek', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  connection.end()    

})




app.post('/kereses', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat_adatb'
  })
  
  connection.connect()
  var feltetel2='komment_nev LIKE "%'+req.body.bevitel1+'%"';
  var feltetel1='komment_szoveg LIKE "%'+req.body.bevitel1+'%"';
  connection.query('SELECT * FROM kerdes WHERE '+feltetel2+' OR '+feltetel1+'', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  
  connection.end()    

})









  /*-------------------------------------------------------------------*/

  app.post('/kommentfelvitel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database:'zarodolgozat_adatb'
    })
    
    connection.connect()
    
    let dt=new Date();
    let teljesdat=dt.getFullYear()+"-"+  (dt.getMonth()+1)   +"-"+dt.getDate();
    connection.query("INSERT INTO kerdes VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"', '"+teljesdat+"') ", function (err, rows, fields) {
      if (err) throw err
    
      console.log("Sikeres felvitel!")

      res.send("Sikeres felvitel!")
    })
    
    connection.end()    

  })  


 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
  