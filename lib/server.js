import net from 'net';

const logInfo = ( ...args) => console.log('[Dans server]', ...args);





export const serve = (host, port) => {
    const server = net.createServer((socket) => {
        logInfo('i see your connected now')
        socket.on('data', (data) => {
            const dataSting = data.toString()
            logInfo('got data', dataSting);
            const lines = dataSting.split('\n')
            const startLine = lines[0];
            const [ method, path ] = startLine.split(' ');
            if(method === 'GET' && path === '/') {
                const body = `
                <html>
                <main>
                <body>
                <h1> congrats </h1>
                </body>
                </main>
                </html>`;
                const values = `HTTP/1.1 200 Ok
Content-Length: ${body.length}
Content-Type: text/html
${body}`

console.log(values);               
                            socket.write(values)
                         } else if(method === 'GET' && path === '/post') {
                            const jsBody = JSON.stringify({ string: 'hello world' });
                            const jsVAlues = `HTTP/1.1 200 Ok
Content-Length: ${jsBody.length}
Content-Type: application/json

${jsBody}`
socket.write(jsVAlues)
                         } else {
                            socket.write(data.toString());    
                         }
            
                    });
                });
                server.listen(port, host, () => {
                    logInfo('server is live');
                });
                logInfo('trying to start server');
                return server;
}

