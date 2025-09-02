import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

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