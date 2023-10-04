const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Resume = require('./Resume')
const EmploymentTypes = require('../../employment-type/EmploymentType')


const ResumeEmploymentTypes = sequelize.define('ResumeEmploymentTypes',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
}, {
    timestamps: false, // Отключение автоматического добавления полей createdAt и updatedAt
});


Resume.belongsToMany(EmploymentTypes, {through: ResumeEmploymentTypes, 
    foreignKey:'resumeId',
    otherKey:'employmentTypeId', as:"employmentTypes"});
EmploymentTypes.belongsToMany(Resume, {through: ResumeEmploymentTypes,
    foreignKey:'employmentTypeId',
    otherKey:'resumeId'});

module.exports = ResumeEmploymentTypes;


