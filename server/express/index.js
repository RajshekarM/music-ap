import express from 'express';
import dotenv from 'dotenv'
import querystring from 'querystring'
import axios from 'axios'

//using environemnt variables
dotenv.config();



const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

//this will create the server and start the server
const app = express();
const PORT = 5000;

const generateRandomString = (length = 8) => {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

};

const scope = 'user-read-private user-read-email';
const stakeKey = 'spotify_auth_state';
const state = generateRandomString(16);

app.get('/hello',(req,res)=>{res.send('hello working')});

app.get('/login',(req,res)=>{

    res.cookie(stakeKey,state);
    const queryParams = querystring.stringify({
        client_id:CLIENT_ID,
        response_type:'code',
        redirect_uri:REDIRECT_URI,
        state:state,
        scope:scope
    });

    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get('/callback',(req,res)=>{

    const code = req.query.code||null;

    var authOptions = {
        method:'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
          code: code,
          redirect_uri: REDIRECT_URI,
          grant_type: 'authorization_code'
        }),
        headers: {
            'content-type':'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        }
      };

      
         axios(authOptions).then(response=>{
            if(response.status==200)
            {
                const {access_token , refersh_token} = response.data;
                const queryParams = querystring.stringify({access_token,refersh_token});

                res.redirect(`http://localhost:3000?${queryParams}`);
            }
            
           
        })
            .catch(error=>{
                console.log('error is back')
                res.send(error)});
    
    });

app.listen(PORT,console.log(`lsitening on PORT: ${PORT}`));

