const express=require("express");
const Sleep = require("../models/Sleep");
const router=express.Router();

router.post("/NewSleepRoutine",async(req,res)=>{
    const{userId,timeLength,timeForSleep,timeForGetup,sleepTimeSpan}=req.body;
    if(!userId){
        return res.status(401).json("Unauthrised User")
    }
    if(!timeLength){
        return res.status(401).json("Please Enter the Time Length for struggling to sleep");

    }

    if(!timeForSleep){
        return res.status(401).json("Please Enter the Time When you Sleep");
    }

    if(!timeForGetup){
        return res.status(401).json("Please Enter the Time When you Get Up");
    }

    if(!sleepTimeSpan){
        return res.status(401).json("Please Enter the Sleeping Time span");
    }

    try{
        const newSleep=new Sleep({
            userId:userId,
            timeLength:timeLength,
            timeForSleep:timeForSleep,
            timeForGetup:timeForGetup,
            sleepTimeSpan:sleepTimeSpan
        })

        const savedSleep=await newSleep.save();

        res.status(200).json(savedSleep);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports=router;