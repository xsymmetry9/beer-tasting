import React, {useState} from "react";

const BeerTasting = ({setUserAnswer}) =>{
    const [answer, setAnswer] = useState({a: "", b: "", c: "", d: "" });

    const handleAnswer = (e) =>{
        const {name, value} = event.target;
        setAnswer((prev) =>({
            ...prev, 
            [name]: value,
        }));
    }

    const handleSubmit = () =>{
        setUserAnswer(answer)
    }
    const english = ['DEFAULT','USA', 'KOREA', 'PHILLIPINES', 'THAILAND'];
    return(
        <>
            <select name="a" id="choice-a" onChange={handleAnswer}>
                {
                    english.map((item) =>(
                        <option value= {"a"}>{item}</option>
                    ))
                }
            </select>
            <select name="b" id="choice-b" onChange={handleAnswer}>
                {
                    english.map((item) =>(
                        <option value= {"b"}>{item}</option>
                    ))
                }
            </select>
            <select name="c" id="choice-c" onChange={handleAnswer}>
                {
                    english.map((item) =>(
                        <option value= {"c"}>{item}</option>
                    ))
                }
            </select>
            <select name="d" id="choice-d" onChange={handleAnswer}>
                {
                    english.map((item) =>(
                        <option value= {"d"}>{item}</option>
                    ))
                }
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )

}

export default BeerTasting;