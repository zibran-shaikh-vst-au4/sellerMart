if(process.env.NODE_ENV !== `production`){
    require('dotenv').config()
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport')
const app = express();
const PORT = process.env.PORT || 6969;
const cloudinary = require('cloudinary').v2


//cors middleware
app.use(cors());

//express midllerwares
app.use(express.json());
app.use(express.static( `public`));
app.use(express.urlencoded({extended: false}));

//passport middleware
app.use(passport.initialize());

//mongoose setup 
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
let DB = mongoose.connection;

DB.once('open', ()=> console.log(`Connection to the Database has been made successfully`));
DB.on('err', (err)=>console.error(`Error in connecting to the database having error ${err}`));

//cloudinary setup
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  })

// testing the connection
/* app.use('/', (req, res)=>{
    res.status(200).send("connection is good")
}) */

//bringing in the routes
const admin = require('./routes/admin');
app.use('/admin', admin)
const project= require('./routes/project');
app.use('/project', project)
const corevalues= require('./routes/corevalues');
app.use('/corevalues', corevalues)
const contact= require('./routes/contactus');
app.use('/contact', contact)
const formdata= require('./routes/formdata');
app.use('/form', formdata)
const enquiry= require('./routes/enquiry');
app.use('/form', enquiry)
const banner = require('./routes/Banner');
app.use('/banner', banner)
const benefit = require('./routes/benefit');
app.use('/benefit', benefit)
const potential = require('./routes/potential');
app.use('/potential', potential)
const list = require('./routes/list');
app.use('/list', list)
const faqs = require('./routes/faqs');
app.use('/faqs', faqs)
const tips = require('./routes/tips');
app.use('/tips', tips)
const loan = require('./routes/loan');
app.use('/loan', loan)

//server connection
app.listen(PORT, ()=> console.log(`Connection to the server was successful at port ${PORT}`))


