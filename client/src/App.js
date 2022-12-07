import 'bulma/css/bulma.css'
import { useEffect, useState } from 'react';
import Music from './Music';
import Navbar from './components/Navbar';
import Starter from './Starter';


function App() {

const [loading,setLoading] = useState(true);

const [userDetails,setUser] = useState({});

    useEffect(()=> {setTimeout(()=>setLoading(false),5000)},[]);

    if(loading){return <><Starter/></>}
    else{
       return (
        <>
          <h1>Parentasasa</h1>
          <Navbar/>
          <Music userDetails = {userDetails}/>
        </> 
      );
    }
  }

export default App;
