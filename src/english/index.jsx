import React, {useState} from "react";
import BeerTasting from "../components/BeerTasting.jsx"
import Result from "../components/Result.jsx";

const Game = () =>{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userAnswer, setUserAnswer] = useState({a: "", b: "", c: "", d: "" });

    const handleAnswer = (e) =>{
        const {name, value} = event.target;
        setUserAnswer((prev) =>({
            ...prev, 
            [name]: value,
        }));
    }
    return(
        <>
            {isSubmitted ? <Result userAnswer = {userAnswer}/> : <BeerTasting userAnswerHandler = {handleAnswer} handler = {setIsSubmitted} />}
        </>
    )
}

export default Game;