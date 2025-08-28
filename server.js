// import { createServer } from 'node:http'

// const server = createServer((request, response) =>{
//     //console.log('oi');
//     response.write('oiiii');
//     return response.end();
// })

// server.listen(3333);

import { fastify } from "fastify";

const server = fastify();

server.get('/videos', () =>{
    return 'Hello world'
})

server.post('/videos', () =>{
    return 'Hello Rocket'
})

server.put('/videos/:id', () => {
    return 'Hello World.js'
})

server.delete('/videos/:id', () => {
    return 'Hello Node.js'
})

server.listen({
    port : 3333,
});