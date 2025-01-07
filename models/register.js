  

import express from 'express'; 
import mongoose from 'mongoose'; 
import bcrypt from 'bcryptjs';

 const RegisterSchema = new mongoose.Schema({
    
    reguser : {
        type: String,
        required : true, 
        unique : true,
    },

    regemail : {
        type: String,
        required : true, 
        isEmail : true,
        unique : true,
    }, 

    regpass : {
        type: String, 
        required : true,
    },  
    

    firstname : {
        type: String,
        required : true,
    },   

   lastname : {
        type: String,
        required : true,
    },  

    role : {
        type : String, 
    }, 

    points : {
        type : Number,
        default : 0,
    },
 
      date : {
               type : Date,
               default : Date.now(),
      },
  

 });   
 
 
 const Mem = mongoose.model('Clients', RegisterSchema);
 //module.exports = Mem;
 export default Mem;


  