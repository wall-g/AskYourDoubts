const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')
const PORT = process.env.PORT || 80
const router = require('./routers')

//db connections
db.connect()


app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))

app.use(express.json())


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    next()
})

//api
app.use('/api', router)

app.use('/upload', express.static(path.join(__dirname, '/../uploads')))
app.use(express.static(path.join(__dirname, "/../frontend/build")))

app.get('*', (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
    } catch (e) {
        res.send('Oops! error occured')
    }
    
})

app.use(cors())

app.listen(PORT, () => {
    console.log(`app running on PORT ${PORT}`)
})