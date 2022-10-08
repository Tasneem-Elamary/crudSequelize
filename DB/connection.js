import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('week3', 'root', '', {
    host: "localhost",
    port:3308,
    dialect: "mysql"
})
export const drawTables =  async() => {
    return  await sequelize.sync({ alter: true }).then((result)=>{
        console.log(`connected DB ....`);
    }).catch((err)=>{
        console.log(`Fail to connect DB .... ${err}`);
    })
}