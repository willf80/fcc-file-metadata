'use strict'

const express = require('express')
const cors = require('cors')
const multer = require('multer')

const app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

const upload = multer()
app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  const { originalname, mimetype, size } = req.file
  res.json({ name: originalname, type: mimetype, size })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...')
})
