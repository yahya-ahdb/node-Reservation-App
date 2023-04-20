const mongoose = require('mongoose')

const roomSchema=new mongoose.Schema({
    title:{
        type: String,
        required :true
    },
    price:{
        type: String,
        required :true
    },
    maxPeople:{
        type: String,
        required :true
    },
    desc:{
        type: String,
        required :true
    },
    roomNubers:[{ number :Number , unavailableDates : { type :[Date] } }]
    
},{timestamps:true})


module.exports = mongoose.model("Room",roomSchema)