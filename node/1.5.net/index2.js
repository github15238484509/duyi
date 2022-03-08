const net = require('net');
const server = net.createServer((c) => {
    // 'connection' listener.
    console.log('client connected',c);
    c.on('end', () => {
        console.log('client disconnected');
    });
    c.pipe(c);
});
server.on('error', (err) => {
    throw err;
});
server.listen(9527, () => {
    console.log('server bound');
});