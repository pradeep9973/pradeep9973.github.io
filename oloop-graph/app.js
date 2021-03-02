/*

author : oloop

*/


const path = require('path');
const hostname = '192.168.29.98';
const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => {
// res.send('Hello World!')
//	res.sendFile(path.join(__dirname + '/index.html'));
//})


app.use(express.static('.'))

app.listen(port, hostname, () => {
  console.log(`papa assets delivery app listening at http://localhost:${port}`)
})
