import React from "react";

const Result = ({ language, userAnswer }) => {
    const correctAnswers = { a: "usa", b: "phillipines", c: "korea", d: "thailand" };

    const perfectScoreMessage = {
        "english": "You got all right!",
        "chinese": "你全答對了！",
        "korean": "모두 맞았어요!",
        "japanese": "全部正解です！"
    };

    // Calculate the number of correct answers
    const numberOfRight = () => {
        let count = 0;
        Object.keys(userAnswer).forEach((item) => {
            if (userAnswer[item].toLowerCase() === correctAnswers[item]) {
                count++;
            }
        });
        return count;
    };

    const showScoreMessage = {
        "english": `Sorry, you got ${numberOfRight()} right.`,
        "chinese": `抱歉，你答對了 ${numberOfRight()} 題。`,
        "korean": `죄송해요, ${numberOfRight()} 개 맞췄어요.`,
        "japanese": `すみません、${numberOfRight()} 問正解しました。`
    };

    return (
        <>
            {numberOfRight() === Object.keys(correctAnswers).length 
                ? <p className="score-title">{perfectScoreMessage[language.toLowerCase()]}</p> 
                : <p className="score-title">{showScoreMessage[language.toLowerCase()]}</p>
            }
            <div className="container">
                <a className = "btn-home" href="/">HOME</a>
            </div>
        </>
    );
};

export default Result;
