var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
const notifier = require('node-notifier')
const swal = require('sweetalert')
const Swal = require('sweetalert2')

var main = require('./main/main')
var courses = require('./courses/index')
var selab = require('./selab/index')
var login = require('./login/index')

//url routing
router.get('/',function(req,res){
    res.render('main.ejs');
})

router.use('/main',main)
router.use('/courses',courses)
router.use('/selab',selab)
router.use('/login',login)


module.exports = router;