import React from "react";

const BeerTasting = () =>{
    const english = ['USA', 'KOREA', 'PHILLIPINES', 'THAILAND'];
    return(
        <>
            <select name="country" id="country">
                {
                    english.map((item) =>(
                        <option value= {"a"}>{item}</option>
                    ))
                }
            </select>
            <select name="country" id="country">
                {
                    english.map((item) =>(
                        <option value= {"b"}>{item}</option>
                    ))
                }
            </select>
            <select name="country" id="country">
                {
                    english.map((item) =>(
                        <option value= {"c"}>{item}</option>
                    ))
                }
            </select>
            <select name="country" id="country">
                {
                    english.map((item) =>(
                        <option value= {"d"}>{item}</option>
                    ))
                }
            </select>
        </>
    )

}

export default BeerTasting;