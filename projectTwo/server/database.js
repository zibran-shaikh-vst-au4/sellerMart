const Sequelize = require("sequelize");

const db = new Sequelize("sellermart", "postgres", "qwerty786", {
    host: "localhost",
    dialect: "postgres"
});

db.authenticate()
    .then(() => {
        console.log("DB is connection is established")
    })

module.exports = db;