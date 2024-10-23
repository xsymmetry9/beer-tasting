import React, {useState} from 'react';
import Home from "./Home.jsx"
import Chinese from "./chinese/index.jsx";
import English from "./english/index.jsx";
import Korean from "./korean/index.jsx";
import Japanese from "./japanese/index.jsx";

const App = () => {
  const [page, setPage] = useState("home");

  const handleNav = (e) =>{
    const newPage = e.currentTarget.value;

    setPage(newPage)
  }

  return (
    <div className="game-container-root">
      {
        page === "chinese" ? <Chinese  /> :
        page === "english" ? <English  /> : 
        page === "korean" ? <Korean /> :
        page === "japanese" ? <Japanese /> :
        <Home handler = {handleNav}/>}
   
    </div>
  );
};

export default App;
