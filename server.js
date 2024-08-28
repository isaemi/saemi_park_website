const express = require('express')
const pool = require('./db')
const port = 1337

const app = express()
app.arguments(express.json())

// routes
app.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM contact')
        res.status(200).send({ client: data.row s})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.post('/', async (req, res) => {
    const { name, address, phone, subject, message } = req.body
    try {
        await pool.query('INSERT INTO contact (name, email, phone,subject, message) VALUES ($1, $2, $3, $4, $5)', [name, address, phone, subject, message])
        res.status(200).send({message: "Succesfully added child"})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('/setup', async(req, res) => {
    try{
        await pool.query('CREATE TABLE contact( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100), phone INT SIGNED(9), subject VARCHAR(100), message VARCHAR(500)')
        res.status(200).send({message: "Succesfully created table"})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
app.listen(port, () => console.log(`Server has started on port: $(port)`))

