import React
 from "react";
const Result = ({userAnswer}) =>{
    const answer = {a: "usa", b: "phillipines", c: "korea", d:"thailand"}
    console.log(userAnswer);
    return(

        <>
            <h1>This is the result</h1>
            <p><strong>Correct: 1</strong></p>
            <p><strong>Wrong: 2</strong></p>
        </>
    )
}

export default Result;