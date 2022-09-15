import net from 'net';

//  const logInfo = ( ...args) => console.log('[Dans server]', ...args);

export const serve = (host, port) => {
    const server = net.createServer((socket) => {
        // logInfo('i see your connected now')
        socket.on('data', (data) => {
            const dataSting = data.toString()
            // logInfo('got data', dataSting);
            const lines = dataSting.split('\n')
            const startLine = lines[0];
            const [ method, path ] = startLine.split(' ');
            if(method === 'GET' && path === '/') {
                const body =`
                <html>
                <main>
                <body>
                <h1> congrats </h1>
                <p>
                my favorite types of cats 
                </p>
                </body>
                </main>
                </html>`;
                const header = `HTTP/1.1 200 Ok
Content-Length: ${body.length}
Content-Type: text/html

`.replaceAll('\n', '\r\n')
                const values = header + body;
console.log(values);
                socket.write(values) 
                         } else if(method === 'GET' && path === '/post') {
                            const jsBody = JSON.stringify({ string: 'hello world' });
                            const header = `HTTP/1.1 200 Ok
Content-Length: ${jsBody.length}
Content-Type: application/json

`.replaceAll('\n', '\r\n')  
                            const values = header + body;

                            socket.write(values)
                         } else if(method === 'POST' && path === '/mail') {
                            const pBody = JSON.stringify({ string: 'MAIL' });
                            const pValues = `HTTP/1.1 204 Ok
Content-Length: 0
Content-Type: text/plain

`.replaceAll('\n', '\r\n')
                            socket.write(pValues)
                         } 
                         
                         else {
                            socket.write(data.toString());    
                         }
            
                    });
                });
                server.listen(port, host, () => {
                    // logInfo('server is live');
                });
                // logInfo('trying to start server');
                return server;
}

