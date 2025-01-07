  
   
 
 import express from 'express';
 import mongoose from 'mongoose'; 



 const onoscoblogSchema = new mongoose.Schema({
     
 
      date : {
               type : Date,
               default : Date.now(),
      },
 
       postImage : {
    originalname : { type : String, required : true},
    mimetype : { type : String, required : true},
    size : { type : Number, required : true},
    path : { type : String, required : true},
       }

 }); 

 
 const Con = mongoose.model('Upcoming Events', onoscoblogSchema);
 //module.exports = Con;
 export default Con;


  