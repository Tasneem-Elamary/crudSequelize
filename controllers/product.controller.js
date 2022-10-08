import { productModel } from "../DB/models/product.model.js"
import { Op } from 'sequelize'
import { userModel } from "../DB/models/user.model.js"

export const productList = async (req, res, next) => {

    const products = await productModel.findAll({
        
    })
    res.json({ message: "Product Module", products })
}


export const addProduct = async(req, res, next) => {

    const { name, description, price,createdby} = req.body
    const product  = await  productModel.create({ name, description, price,createdby})
    res.json({message:"Done" , product})
}

export const updateproduct = async (req, res, next) => {
    const { id } = req.params;
    //const { phone } = req.body
    const product = await productModel.update(req.body, {
        where: {
            id
        }
    })
    if (product[0]) {
        res.json({ message: "DOne", product })

    } else {
        res.json({ message: "in-valid account", product })

    }
}


export const deleteproduct = async (req, res, next) => {
    const { id } = req.params;
    const product = await productModel.destroy({
        where: {
            id: id
        }
    })
    console.log(product);
    if (product) {
        res.json({ message: "DOne", product })

    } else {
        res.json({ message: "in-valid account", product })

    }
}


export const getproductrbyID = async (req, res, next) => {
    const { id } = req.params;
    const product = await productModel.findOne({
        include:[
            {
                model:userModel,
                attributes:['userName', 'email' ]
            }
        ],
        where: {
            id
        }
    })
    if (product) {
        res.json({ message: "DOne", product })

    } else {
        res.json({ message: "in-valid account", product })

    }
}

export const getproductByName = async (req, res, next) => {
    const { name } = req.query;
      const products = await productModel.findAll({
          where: {
            name: {
                [Op.startsWith]: name
                }
            }
      
          })
      if (products) {
          res.json({ message: "Done", products })
  
      } else {
          res.json({ message: "Not found", products })
  
      }
  }