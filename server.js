var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
//var http = require('http').createServer(app);
var io = require('socket.io')(http)
var port = process.env.PORT || 5000
var server = app.listen(5000);
var io = require('socket.io').listen(server);
var http = require('http');

let users = [];
let messages = [];
let index = 0;

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

const mongoURI = 'mongodb+srv://1920:1920@cluster0-qyzs9.mongodb.net/liebherr?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true })
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err))

var Users = require("./routes/Users")

app.use("/users", Users)


//Socket connection

io.on('connection', (socket) => {
    io.emit('noOfConnections', Object.keys(io.sockets.connected).length)


    socket.on('disconnect', () => {
		console.log(`a user has left the chat.`);
        io.emit('noOfConnections', Object.keys(io.sockets.connected).length)
    })



    socket.on('chat-message', (msg) => {
        socket.broadcast.emit('chat-message', msg)
    })
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
    socket.on('stoptyping', () => {
        socket.broadcast.emit('stoptyping')
	})
})

// Static folder
app.use(express.static(__dirname + '/public/'));
  
