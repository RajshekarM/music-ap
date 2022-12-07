import { useState } from "react";
import Song from "../songs";


function Playlist({playList}){

const [songsList, setSongsList] = useState([]);

return<>
     <h1>playList.name</h1>
     <div>{ playList.songs.map((song) => <div> <Song song={song}/></div>) }</div>
     <button>-Remove song</button>
</>
}

export default Playlist;