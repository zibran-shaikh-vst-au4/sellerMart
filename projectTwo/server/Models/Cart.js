const db = require("../database");
const Sequelize = require("sequelize");

let Cart = db.define("cart", {
    product_name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    qty: {
        type: Sequelize.INTEGER
    },
    total: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

db.sync().then(res => {
    console.log("Product DB has been created", res);
})

module.exports = Cart;