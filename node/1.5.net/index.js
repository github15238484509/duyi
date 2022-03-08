const net = require('net');
const client = net.createConnection({
    host: '127.0.0.1',
    port: 9527
}, () => {
    console.log('链接成功');
});
client.write("你好",()=>{
    console.log('发送了');
})
client.on('data',(chunk)=>{
    console.log('收到了',chunk.toString());
    client.end()
})

