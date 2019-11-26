const admin = require('firebase-admin');
const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors')({origin: true});

app.set('view engine', 'ejs');
app.use(cors);

app.get('/', (req, res) => {
    res.render('index.ejs', {'test':'test'});
})

app.get('/notification', (req, res) => {
    res.render('notification.ejs');
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.get('/test', (req, res) => {
    res.send("씨발");
})


module.exports = app;