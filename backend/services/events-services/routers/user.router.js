const express = require('express');
const router = express.Router();
const {registerUser,UserLogin,getAllUser,userUpdate,addUserFavorite,getUserById,removeUserFavorite } =require('../controllers/user.controller');

router.post('/UserRegister',registerUser )
router.get('/UserLogin',UserLogin )
router.get('/getAllUser',getAllUser)
router.put('/updateUser/:id',userUpdate)
router.patch('/addUserFavarite/:id',addUserFavorite)
router.delete('/removeUserFavorite/:id',removeUserFavorite)

router.get('/getUserById/:id',getUserById)


module.exports = router