import React, {useState} from 'react';
import Home from "./Home.jsx"
import Chinese from "./chinese/index.jsx";
import English from "./english/index.jsx";
import Korean from "./korean/index.jsx";
import Japanese from "./japanese/index.jsx";

const App = () => {
  const [userAnswer, setUserAnswer] = useState();
  const [page, setPage] = useState("home");

  const handleNav = (e) =>{
    const newPage = e.currentTarget.value;

    setPage(newPage)
  }

  return (
    <div className="game-container-root">
      {
        page === "chinese" ? <Chinese setUserAnswer={setUserAnswer} /> :
        page === "english" ? <English setUserAnswer={setUserAnswer} /> : 
        page === "korean" ? <Korean setUserAnswer={setUserAnswer}/> :
        page === "japanese" ? <Japanese setUserAnswer={setUserAnswer}/> :
        <Home handler = {handleNav}/>}
   
    </div>
  );
};

export default App;
