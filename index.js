const http = require('http');
const express = require('express');

const app = express();

let LastMessage = '';

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});
app.get('/last-message', (res) => {
	res.end(LastMessage)
})

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});