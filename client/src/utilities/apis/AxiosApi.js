import axios from "axios"



export async function getHero(url)
{
    let JsonPromise;
    JsonPromise =await  axios.get(url);
    return JsonPromise.data.message;
}

export  function getAllSongs(url)
{
    let JsonPromise;
    JsonPromise =  axios.get(url);

    return JsonPromise.data;
}

//create a In-memory data store and store all the songs inside the Store and use these functions to get different songs based on the filter

export  async function getSongsByName(url,params)
{
    let JSONresult;
    JSONresult = await axios.get(url,{
        headers:{},
        params:{}
    });
    return JSONresult;
}

export  async function getSongsByGenre(url,params)
{
    let JSONresult;
    JSONresult = await axios.get(url,{
        headers:{},
        params:{}
    });
    return JSONresult;
}

export  async function getSongsByMood(url,params)
{
    let JSONresult;
    JSONresult = await axios.get(url,{
        headers:{},
        params:{}
    });
    return JSONresult;
}