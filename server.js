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

app.get('/tickets', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        }
    }
    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})



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
        res.status(200).json(response.data)
    } catch(err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})
