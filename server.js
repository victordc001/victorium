import express from 'express';
import ejs from 'ejs';
import mongodb from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
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

 
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
