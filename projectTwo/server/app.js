if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

const express = require("express");
const app = express();
const cors = require('cors');
const cloudinary = require('cloudinary').v2

//middlewares
app.use(cors());
app.use(express.json());

//cloudinary setup
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  })


//bringing in the allproducts route

const AllProducts = require('./routes/allProducts')
app.use('/allproducts', AllProducts )

//bringing in the products route

const Products = require('./routes/products')
app.use('/product', Products )

//bringing in the carts route

const Carts = require('./routes/carts')
app.use('/cart', Carts )


module.exports = app;