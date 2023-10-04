const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const  Company = sequelize.define('Company', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: false, // Отключение автоматического добавления полей createdAt и updatedAt
});

module.exports = Company;