if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const passport=require('passport');
const PORT = process.env.PORT || 9000;
const app = express();


app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

// Cors Middleware
app.use(cors());
// Seting up the static directory
app.use(express.static( 'public'));
// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);

// Bring in the Database Config and connect with the database

mongoose.connect(process.env.DATABASE_STRING, { useNewUrlParser: true, useUnifiedTopology: true});
let DB = mongoose.connection;

DB.once('open', ()=>{console.log(`Connection to the database has been made successfully`)})
DB.on('error', (err)=>{console.error(`Error connecting to the database with error ${err}`)})

// Bring in the Users route
const sellers = require('./routes/sellers');
app.use('/sellers', sellers);

//listening at PORT
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
