import React, {useState} from "react";

const BeerTasting = ({language, userAnswerHandler, handler}) =>{

    const handleSubmit = () =>{
        handler(true);
    }

    const languages = {
        "english": ['...','USA', 'KOREA', 'PHILLIPINES', 'THAILAND'],
        "chinese": ['...', '美國', '韓國', '菲律賓', '泰國'],
        "korean": ['...', '미국', '한국', '필리핀', '태국'],
        "japanese": ['...', 'アメリカ', '韓国', 'フィリピン', 'タイ']
    }
    const arr = () =>{
        const english = ['...','USA', 'KOREA', 'PHILLIPINES', 'THAILAND'];
        const chinese = ['...', '美國', '韓國', '菲律賓', '泰國'];
        const korean = ['...', '미국', '한국', '필리핀', '태국'];
        const japanese = ['...', 'アメリカ', '韓国', 'フィリピン', 'タイ'];


    
        switch(language)
        {
            case "english": 
                return english;
            case "chinese":
                return chinese;
            case "korean":
                return korean;
            case "japanese": 
                return japanese;
            default: english; // Default to english if no matching language is found
        }
    }

    const getArray = arr();

    return(
        <div className="choices-container">
        <div className="two-columns">
            <p className="counter-number">1.</p>
            <select name="a" id="choice-a" onChange={userAnswerHandler}>
                    {
                        languages[language].map((item, index) =>(
                            <option key ={index} value= {languages['english'][index]}>{item}</option>
                        ))
                    }
            </select>

        </div>

        <div className="two-columns">
            <p className="counter-number">2.</p>
        <select name="b" id="choice-b" onChange={userAnswerHandler}>
                {
                    getArray.map((item, index) =>(
                        <option key={index} value= {languages['english'][index]}>{item}</option>
                    ))
                }
            </select>
        </div>
        <div className="two-columns">
            <p className="counter-number">3.</p>
            <select name="c" id="choice-c" onChange={userAnswerHandler}>
                {
                    getArray.map((item, index) =>(
                        <option key={index} value= {languages['english'][index]}>{item}</option>
                    ))
                }
            </select></div>
        <div className="two-columns">
            <p className="counter-number">4. </p>
            <select name="d" id="choice-d" onChange={userAnswerHandler}>
                {
                    getArray.map((item, index) =>(
                        <option key={index} value= {languages['english'][index]}>{item}</option>
                    ))
                }
            </select>
        </div>
            <button className="submit" onClick={handleSubmit}>Done</button>
        </div>
    )

}

export default BeerTasting;