const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io')
app.use(cors());
const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

io.on('connection', (socket) => {
    console.log('user connected')
    socket.on('join_room', (data) => {
        socket.join(data)
        console.log(`user has joined the room ${data}`)
    })
    socket.on('SendMessage', (data) => {
        console.log(data)
    })
})


server.listen(3001, () => {
    console.log('server running')
})