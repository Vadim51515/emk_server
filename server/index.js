const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"test",
})

app.get('/',(req,res) => {

    const sqlInsert = "INSERT INTO student (`name`, `age`, `11`) VALUES ('Good', 'dadada', 'kkkk');"
    const sqlSelect = "SELECT * FROM `student` WHERE 1"
    db.query(sqlSelect, (err,result) => {
        res.send(result)
    })
    // res.send("hello world")
})

app.listen('3001',() => {
    console.log("start server 3001 port");
})