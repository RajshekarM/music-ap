import { useState } from "react";


const Song = function({song})

        {

            function submitHandler(){}

            const [isAdd, setIsAdd] = useState(false);
            return(
            <div> 
                <h1>{song.name}</h1>
                <div>
                    {isAdd?<form onSubmit={submitHandler}><input></input><button>Add</button></form>:
                        <button onClick={setIsAdd(!isAdd)}>+Add to Playlist+</button>}
                </div> 
            </div>);

        }

                        

export default Song