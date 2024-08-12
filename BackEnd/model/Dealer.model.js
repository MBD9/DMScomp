import { DataTypes } from "sequelize";
import sequelize from "../DB/dbConfig.js";

const Dealer = sequelize.define("dealer", {
    DealerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserName: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserType: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    FirstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    Region: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    ControlArea: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CreditAvail: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    CreditExpose: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    CreditLimit: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    Discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },
    SatelliteUser: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
    },
    Role: {
        type: DataTypes.JSON,
        allowNull: true
    },
    ChannelList: {
        type: DataTypes.JSON,
        allowNull: true
    },
    ReturnMsg: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
});

sequelize.sync()
    .then(() => {
        console.log("Dealer Table created...");
    })
    .catch(err => {
        console.log(err);
        console.log("Dealer table not created..");
    });

export default Dealer;
