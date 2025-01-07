 
 
import express from 'express';
import mongoose from'mongoose';  

 
 const SubscriberSchema = new mongoose.Schema({
    
    email : {
        type:String,
        required : true
    }, 
 
      date : {
               type : Date,
               default : Date.now(),
      }, 

 }); 

 
 const Sub = mongoose.model('Subscriber', SubscriberSchema);
export default Sub;


  