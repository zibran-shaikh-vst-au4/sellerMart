const express = require("express");
const app = express();
const cors = require('cors');

//middlewares
app.use(cors());
app.use(express.json());


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