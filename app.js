import express from 'express';
import { drawTables } from './DB/connection.js';
import userRouter from './routes/user.route.js'
import productRouter from './routes/product.route.js'
 import { productModel } from './DB/models/product.model.js';
 import { userModel } from './DB/models/user.model.js';

const app = express();
const port = 3000
app.use(express.json())
drawTables()
userModel.hasMany(productModel, {
    onDelete:"CASCADE",
    onUpdate:'CASCADE',
    foreignKey: 'createdby'
})
productModel.belongsTo(userModel,{
    foreignKey: 'createdby' 
})

 app.use("/api/v1/user", userRouter)
 app.use("/api/v1/product", productRouter)






app.listen(port, () => {
    console.log("Server is running..........");
})