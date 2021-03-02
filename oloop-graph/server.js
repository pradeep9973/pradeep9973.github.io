const express = require('express')();
const http = require('http').Server(express);
const app = express()
app.get('/',(req,res)=> {
	res.sendFile(path.join(_dirname + "/index.html"))
})
const ipaddress = "192.168.29.98"
http.listen(3000, ipaddress, function(){
	console.log('Listening on port 3000!')})
