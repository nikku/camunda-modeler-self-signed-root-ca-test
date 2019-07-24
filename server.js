const https = require('https');
const fs = require('fs');

const options = {
  key:  fs.readFileSync('ssl/server.key'),
  cert: fs.readFileSync('ssl/server.crt'),
  ca:   fs.readFileSync('ssl/self-signed-root-ca.crt')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end('THANK YOU FOR PLAYING ❤️\n');
}).listen(5000);