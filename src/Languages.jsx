import React, { useEffect, useState } from "react";

const Home = ({ handler }) => {
    const messages = [
        "Welcome to Beer Tasting Challenge",
        "歡迎參加啤酒品嚐挑戰",
        "맥주 시음 도전에 오신 것을 환영합니다",
        "ビールテイスティングチャレンジへようこそ"
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000); // Change message every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [messages.length]);

    return (
        <>
            <div className="display-moving-message">
                <h1 class="heading-title">{messages[currentMessageIndex]}</h1>
            </div>
            <ul id="nav-languages">
                <li><button className="nav-languages" onClick={handler} value="chinese">中文</button></li>
                <li><button className="nav-languages" onClick={handler} value="english">English</button></li>
                <li><button className="nav-languages" onClick={handler} value="japanese">日本語</button></li>
                <li><button className="nav-languages" onClick={handler} value="korean">한국어</button></li>
            </ul>
        </>
    );
};

export default Home;
