import React, {useState} from "react";

const BeerTasting = ({userAnswerHandler, handler}) =>{

    const handleSubmit = () =>{
        handler(true);
    }
    const english = ['DEFAULT','USA', 'KOREA', 'PHILLIPINES', 'THAILAND'];
    return(
        <>
            <select name="a" id="choice-a" onChange={userAnswerHandler}>
                {
                    english.map((item, index) =>(
                        <option key ={index} value= {"a"}>{item}</option>
                    ))
                }
            </select>
            <select name="b" id="choice-b" onChange={userAnswerHandler}>
                {
                    english.map((item, index) =>(
                        <option key={index} value= {"b"}>{item}</option>
                    ))
                }
            </select>
            <select name="c" id="choice-c" onChange={userAnswerHandler}>
                {
                    english.map((item, index) =>(
                        <option key={index} value= {"c"}>{item}</option>
                    ))
                }
            </select>
            <select name="d" id="choice-d" onChange={userAnswerHandler}>
                {
                    english.map((item, index) =>(
                        <option key={index} value= {"d"}>{item}</option>
                    ))
                }
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )

}

export default BeerTasting;