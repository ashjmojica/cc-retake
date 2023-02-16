import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
const [poems, setPoems] = useState([])
const [ isClicked, setIsClicked ] = useState(false)

  function handleClick() {
    setIsClicked(isClicked => !isClicked)
  }


useEffect(() => {
  fetch('http:localhost:8004/poems')
    .then(response => response.json())
    .then(data => setPoems(data))
}, [])


  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick}>Show/hide new poem form</button>
        {isClicked ? <NewPoemForm poems={poems} /> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
