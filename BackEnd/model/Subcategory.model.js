import { DataTypes } from 'sequelize';
import sequelize from '../DB/dbConfig.js';

const Subcategory = sequelize.define('Subcategory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Categories', // Ensure this matches the Category model name
            key: 'id',
        },
        onDelete: 'CASCADE', // Optional: define what happens on deletion
    },
    Scode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
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
    tableName: 'Subcategories' // Explicitly define table name
});

export default Subcategory;
