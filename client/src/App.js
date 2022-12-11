import 'bulma/css/bulma.css'
import { useEffect, useState } from 'react';
import Music from './Music';
import Navbar from './components/Navbar';
import Starter from './Starter';
import {getUserProfile} from './Spotify'


function App() {

const [loading,setLoading] = useState(true);

const [userDetails,setUser] = useState({});

    useEffect(()=> {setTimeout(()=>setLoading(false),5000)},[]);

    useEffect(()=>{


      const getProfile = async () => {
        console.log('requesting data from localhost')
        const {data} = await getUserProfile();
        console.log(data);

    }

    getProfile();

    })


    if(loading){return <><Starter/></>}
    else{
       return (
        <>
          <h1>Parentasasa</h1>
          <Navbar/>
          <a href="http:\\localhost:5000\login">login spotify</a>
          <Music userDetails = {userDetails}/>
        </> 
      );
    }
  }

export default App;
