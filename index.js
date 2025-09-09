const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2')
process.loadEnvFile() // Required for Node to read the `.env` file, God knows why... Thanks to https://stackoverflow.com/a/79715113

app.get('/exams', (req, res) => {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    })
    connection.connect()

    connection.query('SELECT * from exam;', (err, rows, fields) => {
        if (err) throw err

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(rows));
    })

    connection.end()
})

app.listen(port, () => {
    console.log(`CREP-API is now listening on port ${port}`)
})