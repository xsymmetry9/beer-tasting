import React from "react";

const Home = ({handler}) =>{
    return(
        <>
            <h1>Welcome to Beer Tasting</h1>
                <ul id="nav-laguages">
                    <li><button className="nav-languages" onClick={handler} value ="chinese">中文</button></li>
                    <li><button className="nav-languages" onClick={handler} value ="english">English</button></li>
                    <li><button className="nav-languages" onClick={handler} value ="japanese">日本語</button></li>
                    <li><button className="nav-languages" onClick={handler} value ="korean">한국어</button></li>
                </ul>
        </>
    )
}
export default Home;
