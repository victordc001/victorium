  
import express from 'express';
import mongoose from'mongoose';  

 const TestimonySchema = new mongoose.Schema({
    
    firstname : {
        type:String,
        required : true
    },

    secondname : {
        type: String,
        required : true
    },
    

    testimony : {
        type: String,
        required : true
    },   
  
 
      date : {
               type : Date,
               default : Date.now(),
      }, 

 }); 

 
 const Tes = mongoose.model('Testimony', TestimonySchema);
 export default Tes;


  