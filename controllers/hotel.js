const asyncHandler = require('express-async-handler');
const Hotel = require('../models/Hotel');

exports.createHotel= asyncHandler(async(req,res ,next)=>{
    const newHotle =new Hotel (req.body)
    const savedHolte = await newHotle.save();
    res.status(200).json({savedHolte})
    next(err)
})

exports.UpdateHotel =asyncHandler(async(req,res,next)=>{
    const { id } =req.params;
    const updateHolte = await Hotel.findByIdAndUpdate( id,
        { $set :req.body },
        { new :true}
        );
        res.status(200).json({updateHolte})
})

exports.DeleteHotel =asyncHandler(async(req,res,next)=>{
    const { id } =req.params;
    await Hotel.findByIdAndDelete(id);
    res.status(200).json("Hotel has been delete")
})
exports.GetByIDHotel =asyncHandler(async(req,res,next)=>{
    const {id} = req.params
    const getHotel = await Hotel.findById(id);
    res.status(200).json({getHotel})
    next(err)
})

exports.GetAllHotel=asyncHandler(async(req,res,next)=>{
    const getAllHotel = await Hotel.find();
    const resulte = getAllHotel.length ;
    res.status(200).json({resulte,getAllHotel})
    next(err)
})

exports.countByCity=asyncHandler(async(req,res,next)=>{
    const cities =req.query.cities.split(",")
    const list =await Promise.all(cities.map(city=>{
        return Hotel.countDocuments({city:city})
    }))
    res.status(200).json( list )
    next(err)
})

