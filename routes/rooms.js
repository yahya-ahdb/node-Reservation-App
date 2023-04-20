const express = require('express')
const {verifyAdmin} = require("../utils/verifyToken")
const { createRoom, getRoom, updateRoom, deleteRoom, getRooms } = require('../controllers/room')

const router = express.Router()


// Create
// get all
router.post("/:hotelid", createRoom);
router.get("/",getRooms)
// update
// delete
// get by ID
router.route("/:id").put( verifyAdmin ,updateRoom)
.delete(  verifyAdmin , deleteRoom)
.get(getRoom)


module.exports = router