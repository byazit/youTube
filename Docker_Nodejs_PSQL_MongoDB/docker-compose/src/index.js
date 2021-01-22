const express = require('express')
const app = express()

app.get('/', function(req, res){
	res.send('hello world...1')
})

app.listen(3000);
