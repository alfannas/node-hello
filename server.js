const http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-Type' : 'text/html'
	})
	res.end('hello world')
}).listen(3000, '127.0.0.1');

console.log('node stating at http://127.0.0.1:3000');

