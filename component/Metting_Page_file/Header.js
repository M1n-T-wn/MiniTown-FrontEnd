import React from "react";
import Back from "./img/Back.png"
import Plus from "./img/Plus.png"

function Header(){
    return(
        <div className="Me_Header_box">
            <div className="Me_Header_back"><img src={Back}/></div>
            <div className="Me_Header_title">Mini Town</div>
            <div className="Me_Header_Plus"><img src={Plus}/></div>
        </div>
    )
}

export default Header