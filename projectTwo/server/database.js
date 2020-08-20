const Sequelize = require("sequelize");

const db = new Sequelize("sellermart", "postgres", process.env.DATABASE_PASSWORD, {
    host: "localhost",
    dialect: "postgres"
});

db.authenticate()
    .then(() => {
        console.log("DB is connection is established")
    })

module.exports = db;