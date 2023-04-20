const express = require('express')
const { createHotel, UpdateHotel, DeleteHotel, GetByIDHotel, GetAllHotel, countByCity } = require('../controllers/hotel.js')
const { verifyAdmin } = require('../utils/verifyToken')

const router = express.Router()
// Create
// get all
router.route("/").post(createHotel)
.get(GetAllHotel)
// update
// delete
// get by ID
router.route("/:id").put( verifyAdmin ,UpdateHotel)
.delete(  verifyAdmin , DeleteHotel)
router.get("/find/:id",GetByIDHotel)


router.get("/countByCity" ,countByCity )
// router.get("/countByType" , getHotels)

module.exports = router