import { DataTypes } from "sequelize";
import sequelize from "../DB/dbConfig.js";

const department = sequelize.define('department', {
    DepartmentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departmentName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    departmentCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})
sequelize.sync()
    .then(() => {
        console.log("Complaints Table created...");
    })
    .catch(err => {
        console.log(err);
        console.log("Complaints table not created..");
    });

export default department;