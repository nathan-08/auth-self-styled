// auth self styled auth0 
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))



//***********************************************************************//
//                  ENDPOINTS                    //
// Healthcheck
app.get('/api/check',function(req,res){
    res.status(200).send('ok')
})
// Get session data
app.get('/api/session',function(req,res){
    res.status(200).send(req.session)
})

//

//////////////////////////////////////////////////////////////////////




const port = process.env.PORT || 3012
app.listen(port, _=>console.log(`listening on port ${port}`))