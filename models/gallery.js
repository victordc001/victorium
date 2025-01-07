 
  
 
 import express from 'express';
 import mongoose from 'mongoose'; 



 const  gallerySchema = new mongoose.Schema({
   
 
      date : {
               type : Date,
               default : Date.now(),
      },
 
       postGallery : [
              {
    originalname : { type : String, required : true},
    mimetype : { type : String, required : true},
    size : { type : Number, required : true},
    path : { type : String, required : true},
       } 
   ],

 }); 

 
 const Con = mongoose.model('Gallery', gallerySchema);
 //module.exports = Con;
 export default Con;


  