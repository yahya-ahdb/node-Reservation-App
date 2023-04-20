const express = require('express')
const dotenv =require('dotenv')
const mongoose =require('mongoose')
const cors = require('cors');
const authRoute =require('./routes/auth')
const hotelsRoute =require('./routes/hotels')
const usersRoute =require('./routes/users')
const roomsRoute =require('./routes/rooms')
const cookieParser = require('cookie-parser')

const app =express();
app.use(cors());
dotenv.config()
mongoose.connect(process.env.url)
.then(()=>{
  console.log('connected is ssuccessufly');
}).catch((err)=>{
  console.log("the not connected "+err );
})

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoute)
app.use('/api/users',usersRoute)
app.use('/api/hotels',hotelsRoute)
app.use('/api/rooms',roomsRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(8000,()=>{
    console.log("connected to port 8000");
})