import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log('Connected to MongoDB!');
      })
      .catch((err) => {
        console.log(err);
      });
    

const app = express();
//mongodb+srv://mannbavre:Jordan@2005@mern-blog.p0nj1.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=mern-blog
app.listen(3000,()=>{
    //mongodb+srv://mannbavre:<db_password>@mern-blog.p0nj1.mongodb.net/
    console.log('Server is running on port 3000');
})