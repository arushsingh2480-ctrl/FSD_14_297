import http from 'http'
const server=http.createServer();
server.on('request',(req,res)=>{//wait for event
    res.write("<h1>welcome to server side programming</h2>");
    res.write("<h2>Nodemon is tracking the files</h2>");
    res.end();
});
server.listen(5001,()=>{
    console.log("server is running")
});