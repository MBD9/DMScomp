
import { DataTypes } from 'sequelize';
import sequelize from '../DB/dbConfig.js';
import Department from './DepartMent.model.js';


const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Ccode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    departmentName: {
        type: DataTypes.STRING,
        references: {
            model: Department,
            key: 'departmentName'
        },
        onDelete: 'CASCADE',
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    }
}, {
    tableName: 'Categories'
});
Department.hasMany(Category, { foreignKey: 'departmentName', sourceKey: 'departmentName' });
Category.belongsTo(Department, { foreignKey: 'departmentName', targetKey: 'departmentName' });
export default Category;
