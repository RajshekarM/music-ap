import { useState } from "react";
import Song from "../songs";


function Playlist({playList}){




const [songsList, setSongsList] = useState([]);

return<>
     {/* <h1>playList.name</h1>
     <div>{ playList.songs.map((song) => <div> <Song song={song}/></div>) }</div>
     <button>-Remove song</button> */}



     <div>
          <div>
               <button>ViewPlaylistSongs</button>
               <button>Edit Playlist</button>
               <div style={{width:'250px',border:'2px solid red',height:'300px'}}>Songs List</div>
          </div>    
     </div>
</>
}

export default Playlist;