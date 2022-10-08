import { sequelize } from '../connection.js'
import { Sequelize, DataTypes } from 'sequelize'
export const userModel = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    age: {
        type:DataTypes.INTEGER ,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
})