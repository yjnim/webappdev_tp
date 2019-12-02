var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var notifier = require('node-notifier')
const Swal = require('sweetalert2')

router.get('',function(req,res){
    res.render('main.ejs');

})

module.exports = router;