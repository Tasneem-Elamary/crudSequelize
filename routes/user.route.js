import { Router } from 'express';

import { addUser,deleteUser,updateUser,getUserbyID,findAllUser,getAllUserByAgeBetween,getAllUserByName,
    getAllUserByAgeGreater,getAllUserByAgeLess} from '../controllers/user.controller.js';
const router = Router();



router.get("/getAllUserByAgeBetween", getAllUserByAgeBetween)
router.get("/getAllUserByAgeLess", getAllUserByAgeLess)
router.get("/getAllUserByAgeGreater", getAllUserByAgeGreater)
router.get("/getAllUserByName", getAllUserByName)


 router.get("/", findAllUser)
router.post('/', addUser)

router.patch("/:id" , updateUser)
router.delete("/:id", deleteUser)

 router.get("/:id" , getUserbyID)



export default router