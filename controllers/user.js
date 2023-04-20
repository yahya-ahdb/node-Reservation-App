const asyncHandler = require('express-async-handler');
const User = require('../models/User');

exports.createUser= asyncHandler(async(req,res ,next)=>{
    const newHotle =new User (req.body)
    const savedHolte = await newHotle.save();
    res.status(200).json({savedHolte})
    next(err)
})

exports.UpdateUser =asyncHandler(async(req,res,next)=>{
    const { id } =req.params;
    const updateuser = await User.findByIdAndUpdate( id,
        { $set :req.body },
        { new :true}
        );
        res.status(200).json({updateuser})
})

exports.DeleteUser =asyncHandler(async(req,res,next)=>{
    const { id } =req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json("User has been delete")
    next(err)
})
exports.GetByIDUser =asyncHandler(async(req,res,next)=>{
    const {id} = req.params
    const getUser = await User.findById(id);
    res.status(200).json({getUser})
})

exports.GetAllUser=asyncHandler(async(req,res,next)=>{
    const getAllUser = await User.find();
    const resulte = getAllUser.length ;
    res.status(200).json({resulte , getAllUser })
    next(err)
})
