import { sequelize } from "../connection.js";
import { DataTypes } from 'sequelize'
export const productModel  = sequelize.define("Product", {

    name:{
        type:DataTypes.STRING(100) ,//255,
        allowNull:false

    },
    description:{
        type:DataTypes.STRING(100) ,//255,
        allowNull:false
    },
    price:{
        type:DataTypes.FLOAT,//255,
        allowNull:false
    },
    // CreatedBy:{
    //     type:DataTypes.INTEGER ,//255,
    //     allowNull:false
    // }

})