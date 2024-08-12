
import { DataTypes } from "sequelize";
import sequelize from "../DB/dbConfig.js";
import Dealer from "./Dealer.model.js";
const Complaints = sequelize.define("complaints", {
    ComplaintID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserName: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: Dealer,
        //     key: 'UserName'
        // },
        // onDelete: 'CASCADE'
    },
    category: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    subCategory: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    batchNo: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    Responsibility: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: 'Salesman Name'
    },
    ConcernedDept: {
        type: DataTypes.STRING,
        allowNull: false,
        // defaultValue:"Other"
        // references: {
        //     model: Department,
        //     key: 'departmentName'
        // }
    },
    InvoiceNo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    InvoiceDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    IssueDescription: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    SKUCode: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0

    },
    DealerRemark: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Repetitive: {
        type: DataTypes.STRING,
        defaultValue: "No",
        allowNull: true
    }
    ,
    Image1: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    }
    ,
    Image2: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
    Image3: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    }
    ,
    state: {
        type: DataTypes.ENUM,
        defaultValue: "Pending",
        values: ["Pending", "Complete"]
    }
});

// Complaints.belongsTo(Dealer, { foreignKey: 'UserName' });
// Dealer.hasMany(Complaints, { foreignKey: 'UserName' });

// Complaints.belongsTo(Department, { foreignKey: 'ConcernedDept', targetKey: 'departmentName' });
// Department.hasMany(Complaints, { foreignKey: 'ConcernedDept', sourceKey: 'departmentName' });


// In Complaints model definition
// Complaints.belongsTo(Department, { foreignKey: 'ConcernedDept', targetKey: 'departmentName', onDelete: 'CASCADE' });
// Department.hasMany(Complaints, { foreignKey: 'ConcernedDept', sourceKey: 'departmentName', onDelete: 'CASCADE' });


sequelize.sync()
    .then(() => {
        console.log("Complaints Table created...");
    })
    .catch(err => {
        console.log(err);
        console.log("Complaints table not created..");
    });

export default Complaints;

