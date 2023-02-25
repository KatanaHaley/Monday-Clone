const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

const url = 'https://a01c2c92-5871-47e7-8086-83719773b50c-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:CHdkJIgLiplOCUYxMvNcFLdb:37c561b9895ff10011442a8850be38d3fe1030f6d1a8f30a43f9c543125bfb56'

app.listen(PORT, () => console.log('server running on PORT ' + PORT))

app.post('/tickets', async(req, res) =>{
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }
    try {
        const response = await axios(url, options)
        res.statusCode(200).json(res.data)
    } catch(err) {
        console.log(err)
        req.status(500).json({message: err})
    }
})

// app.get('/example/b', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from B!')
//   })

// const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   const cb2 = function (req, res) {
//     res.send('Hello from C!')
//   }
  
//   app.get('/example/c', [cb0, cb1, cb2])
  