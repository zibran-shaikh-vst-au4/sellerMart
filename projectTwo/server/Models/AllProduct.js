const db = require("../database");
const Sequelize = require("sequelize");

let AllProduct = db.define("allproduct", {
    product_name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

db.sync().then(res => {
    console.log("Product DB has been created", res);
})

module.exports = AllProduct;