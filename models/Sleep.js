const mongoose =require("mongoose");

const SleepSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        unique:true,
        required:true
    },
    timeLength:{
        type:String,
        required:true
    },
    timeForSleep:{
        type:String,
        required:true
    },
    timeForGetup:{
        type:String,
        required:true 
    },
    sleepTimeSpan:{
        type:String,
        required:true
    }

    
},{timestamps:true})

module.exports=mongoose.model("Sleep",SleepSchema);