const express = require('express');
const router = express.Router();
const { createHackathon,getAllHackathons,findHackendById,updateHackathon,deleteHackathon,getforhomepage } = require('../controllers/hackathon.controller');

router.post('/createHackathon',createHackathon )
router.get('/getAllHackathons',getAllHackathons)
router.get('/getforhomepage',getforhomepage)


router.get('/getHackathonById/:id',findHackendById)
router.put('/updateHackathon/:id',updateHackathon)
router.delete('/deleteHackathon/:id',deleteHackathon)

module.exports = router