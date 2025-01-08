import express from 'express';
import ejs from 'ejs';
import mongodb from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware and configurations
app.set('view engine', 'ejs');
app.use(cors());
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));   


 app.get('/', (req,res)=>{ 
    res.render('./pages/index');
 });  

 app.get('/track', (req,res)=>{
     res.render('./pages/track');
 }); 

 app.get('/about', (req,res)=>{
    res.render('./pages/about');
});

app.get('/contact', (req,res)=>{
    res.render('./pages/contact');
}); 

app.post('/tracking', async (req,res)=>{
     const trackparams = req.body;
     const address = trackparams.address;
     const network = trackparams.network;  

     console.log(`Fetching data for ${address} from ${network} network`); 

     try{  
        if(network === 1) {
             //that means the user chose bitcoin  
         const response = await axios.get('https://api.blockcypher.com/v1/btc/main/addrs/1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD/full?before=300000');
         console.log('Successful'); 
         console.log(response); 
         res.status(200).json({msg : 'tracked'});
        }     
         
     } 

     catch(err) {
          const error = await err.response.data;
          console.log(err); 
          res.status(500).send('OOPS!!!!, An error occured . Please reverify the address entered or check your connection');
     }
});
    
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
