import { Router } from 'express';
import { productList , addProduct ,updateproduct,deleteproduct,getproductrbyID,getproductByName} from '../controllers/product.controller.js';
const router = Router();

router.get("/getproductByName", getproductByName)
 router.get("/",productList)

 router.post("/", addProduct)
 router.patch("/:id" , updateproduct)
router.delete("/:id", deleteproduct)

 router.get("/:id" , getproductrbyID)








export default router