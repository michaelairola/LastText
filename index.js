const http = require('http');
const express = require('express');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const app = express();

const signature_secret = VONAGE_SIGNATURE_SECRET;
let LastMessage = '';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {
	try {
        let auth = jwt.verify(req.headers['authorization'].split(' ')[1], signature_secret)
        const params = Object.assign(request.query, request.body)
		console.log(params)
        LastMessage = params.text
  		res.writeHead(200, {'Content-Type': 'text/xml'});
        res.send('Verified')
    } catch (error) {
        res.sendStatus('401')
    }    
});
app.get('/last-message', (res) => {
	res.writeHead(200, {'Content-Type': 'text/xml'});
	res.end(LastMessage)
})

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});