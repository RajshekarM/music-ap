import express from 'express';
import  request  from 'request';
import dotenv from 'dotenv'

//using environemnt variables
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

//this will create the server and start the server
const app = express();
const PORT = 8080;


app.get('/',(req,res)=>{res.send('hello working')});

app.get('/login',(req,res)=>{
    res.redirect('https://accounts.spotify.com/authorize');
})

app.get('/callback',(req,res)=>{

    request.post('url',(res,body)=>{

        res.redirect();

    });
    
})

app.listen(8080,console.log(`lsitening on PORT: ${PORT}`));

