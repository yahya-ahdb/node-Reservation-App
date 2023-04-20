const express = require('express')
const { createUser, GetAllUser, UpdateUser, DeleteUser, GetByIDUser } = require('../controllers/user')
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken')

const router = express.Router()

router.get("/checkauth",verifyToken,(req,res,next)=>{
    
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user")
})
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello")
})

// Create
// get all
router.route("/").post(createUser)
.get(verifyAdmin ,GetAllUser)
// update
// delete
// get by ID
router.route("/:id").put( verifyUser, UpdateUser)
.delete(verifyUser ,DeleteUser)
.get(verifyAdmin , GetByIDUser)

module.exports = router