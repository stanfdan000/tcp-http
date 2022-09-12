# Template for Advanced Fullstack TCP/IP Socket HTTP server

Use this template to create a TCP/IP socket server to build an Express.js-like
server using `net.Socket`.

## Starting

`npm start`

## Testing

`npm test`


<!-- export const JSONserve = (host, port) => {
    const server = net.createServer((socket) => {
        logInfo('JSON connections')
        socket.on('data', (JSONdata) => {
            const dataJSONSting = JSONdata.toString()
            logInfo('got JSON data', dataJSONSting);
            const lines = dataJSONSting.split('\n')
            const startLine = lines[0];
            const [ method, path ] = startLine.split(' ');
            if(method === 'GET' && path === '/1') {
                const JSONbody = 'JSON string'
                const JSONvalues = `
                '<html>
                <main>
                <body>
                <h1> congrats </h1>
                </body>
                </main>
                </html>'`;
                const values = `HTTP/1.1 200 Ok
Content-Length: ${JSONbody.length}
Content-Type: application/JSON

${body}`

console.log(JSONvalues);               
                            socket.write(JSONvalues)
                         } else {
                            socket.write(JSON.stringify(JSONdata));    
                         }
            
                    });
                });
                server.listen(port, host, () => {
                    logInfo('server is live');
                });
                logInfo('trying to start server');
                return server;
} -->