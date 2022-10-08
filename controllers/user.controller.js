import { userModel } from "../DB/models/user.model.js"
import { Op } from 'sequelize'
import { productModel } from "../DB/models/product.model.js"
//Route1    

export const addUser = async (req, res, next) => {
    try {
        const { userName, email, password ,age,address} = req.body
        const user = await userModel.create({ userName, email, password ,age,address})
        res.json({ message: "Done", user })
    } catch (error) {
        if (error?.original?.errno == 1062) {
            res.json({ message: "Email Exist" })
        } else {
            res.json({ message: "catch error", error })
        }
    }

}


export const updateUser = async (req, res, next) => {
    const { id } = req.params;
    //const { phone } = req.body
    const user = await userModel.update(req.body, {
        where: {
            id
        }
    })
    if (user[0]) {
        res.json({ message: "DOne", user })

    } else {
        res.json({ message: "in-valid account", user })

    }
}


export const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await userModel.destroy({
        where: {
            id: id
        }
    })
    console.log(user);
    if (user) {
        res.json({ message: "DOne", user })

    } else {
        res.json({ message: "in-valid account", user })

    }
}


export const getUserbyID = async (req, res, next) => {
    const { id } = req.params;
    const user = await userModel.findOne({
        include: [
            {
                model: productModel,
                 attributes:[ 'name' ,'price' ,'description']
            }],
        where: {
            id
        }
    })
    if (user) {
        res.json({ message: "DOne", user })

    } else {
        res.json({ message: "in-valid account", user })

    }
}

export const findAllUser = async (req, res, next) => {
    try {
        
        const users = await userModel.findAll({
            
            include: [
                {
                    model: productModel,
                     attributes:[ 'name' ,'price','description']
                }
            ]
        
         })
        res.json({ message: "Done", users })
    } catch (error) {
        res.json({ message: "catch error", error })
    }
}


export const getAllUserByAgeBetween = async (req, res, next) => {
  const { age1,age2 } = req.query;
    const users = await userModel.findAll({
        where: {
            age: {
                [Op.between]: [age1,age2]
              }
          }
    
        })
    if (users) {
        res.json({ message: "DOne", users })

    } else {
        res.json({ message: "Not found", users })

    }
}

export const getAllUserByName = async (req, res, next) => {
    const { name } = req.query;
      const users = await userModel.findAll({
          where: {
            userName: {
                [Op.startsWith]: name
                }
            }
      
          })
      if (users) {
          res.json({ message: "Doone", users })
  
      } else {
          res.json({ message: "Not found", users })
  
      }
  }

  export const getAllUserByAgeGreater = async (req, res, next) => {
    const { age } = req.query;
      const users = await userModel.findAll({
          where: {
              age: {
                  [Op.gt]: age
                }
            }
      
          })
      if (users) {
          res.json({ message: "DOne", users })
  
      } else {
          res.json({ message: "Not found", users })
  
      }
  }

  export const getAllUserByAgeLess = async (req, res, next) => {
    const { age} = req.query;
      const users = await userModel.findAll({
          where: {
              age: {
                  [Op.lt]: age
                }
            }
      
          })
      if (users) {
          res.json({ message: "DOne", users })
  
      } else {
          res.json({ message: "Not found", users })
  
      }
  }