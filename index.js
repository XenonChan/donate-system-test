const express = require('express')
const socketIO = require('socket.io')
const http = require('http')
const path = require('path')
const cors = require('cors')
const multer = require('multer')

const verifySlip = require('./api-bank/verifyslip')
const connectDatabase = require('./database')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const upload = multer()

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'widgets')))
app.use(express.static(path.join(__dirname, 'views')))
app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/donate.html')
})
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/views/test.html')
})
app.get('/widgets', (req, res) => {
    res.sendFile(__dirname + '/widgets/widgets.html')
})

app.post('/donate',upload.single('file'), (req, res) => {
    const { name, message } = req.body
    const file = req.file;
    verifySlip(file, name, message).then(response => {
        if (response.status === 200) {
            const amount = response.data.amount.amount
            io.emit('donate', {name, message, amount})
            res.json(response.msg)
        } else if (response.status === 404) {
            res.json(response.msg)
        }
    }).catch(error => {
        res.status(500).json({ error: error.message })
    })
})

app.post('/testapi', (req, res) => {
    const { name, message, amount } = req.body;
    io.emit('donate', {name, message, amount})
    res.json({
        message: 'Thankyou for donate!!! :3'
    })
})

io.on('connection', (socket) => {
    socket.on('donate', (data) => {
        io.emit('donate', data)
    })
})

server.listen(3000, () => {
    console.log("tHis SerVer iS rUnnINg On P0rT 3000!!!")
})
connectDatabase()
