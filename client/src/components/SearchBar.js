import { useEffect, useState } from "react";

function SearchBar({setSearchItem}) {

    const [input,setInput] = useState('');
    useEffect(()=>setSearchItem(input),[input]);

    return (
      <>
       <h1>What  if you born as dog in your next life. Enter below</h1>
       <input onChange={(e)=>setInput(e.target.value)}></input>
       <h2>{input}</h2>
      </>
    );
  }
  
  export default SearchBar;