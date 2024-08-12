
import { Sequelize } from "sequelize";
const host = "192.9.205.2";
const database = "NewDMS";
const username = "sa";
const password = "admin@1235";

// Sequelize configuration
const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mssql',
    omitNull:true,
     pool:{
        max:10,
        min:1
     },
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true, // Use this to trust the server certificate
        }
    }
});

sequelize.authenticate()
    .then(() => {
        console.log("Database connected....");
    })
    .catch(err => {
        console.error("Database connection failed:", err);
    });

export default sequelize;
