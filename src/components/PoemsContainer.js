import React from "react";
import Poem from "./Poem";



const PoemsContainer = ({poems}) => {



  return (
    <div className="poems-container" > 
  {
poems.map(poem=>{
  return <Poem title={poem.title} id={poem.id} content={poem.content} 
  author={poem.author} />
  
})
  }
     
      
    </div>
)}

export default PoemsContainer;
