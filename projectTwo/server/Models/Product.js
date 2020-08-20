const db = require("../database");
const Sequelize = require("sequelize");

let Product = db.define("product", {
    product_name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    stock: {
        type: Sequelize.INTEGER
    },
    qty: {
        type: Sequelize.INTEGER,
        defaultValue: '1'
    },
    total: {
        type: Sequelize.INTEGER,
        defaultValue: '0'
    },
    publish: {
        type: Sequelize.BOOLEAN,
       
    },
    coverImage:{
        type: Sequelize.STRING
    }
});

db.sync().then(res => {
    console.log("Product DB has been created", res);
})

module.exports = Product;