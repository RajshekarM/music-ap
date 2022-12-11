import { useEffect, useState } from "react";
import {getJson} from "./utilities/apis/AxiosApi";
import {getHero} from './utilities/apis/AxiosApi'
import Home from "./components/Home";
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import Playlist from "./components/playlists";

const Music = ({userDetails}) => {

     const [initialData, setIntialData]  = useState('');
     const [name, setName]  = useState('');
     const accessToken = "1965540970307258";
     const url = 'https://dog.ceo/api/breeds/image/random';
     const [isDataReady, setDataReady] = useState(false);
     const [searchItem,setSearchItem] = useState('');
     const [musicResult, setMusicResult] = useState('');

     useEffect(()=>{
      //call for initial data 
      const queryParams= window.location.search;
      const urlParams = new URLSearchParams(queryParams);
      const access_token = urlParams.get('access_token');
      const refersh_token = urlParams.get('refresh_token');
      console.log(access_token);

      const getData = async () => {
          console.log('requesting data from localhost')
         // const {data} = await axios.get('/hello');
         // console.log(data);

      }

      getData();
          

     },[]);

     const user = [];

     useEffect(()=>{
          const getHeros = async ()=>{
                    const result = await getHero(url);
                    setMusicResult(result);
               }
               console.log('requesting data');
               getHeros();              
                              }
               ,[searchItem]);

     return<div>
               <h1 className="block">Music App</h1>
               <SearchBar setSearchItem = {setSearchItem}/>
               <p>{name}</p>
               <img src={musicResult.toString()}/>
               <div>
                    {/* {  user.playLists.map( (playlist) => <Playlist playList = {playlist} /> ) } */}
                    <Playlist/>
               </div>
          </div>

     

    
}

export default Music;