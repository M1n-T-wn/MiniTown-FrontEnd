import React from "react";
import Friend_list from "./Friend_list";
import Chatting from "./Chatting";
import "./Meeting_Chathing.css"


function Meeting_Chathing(){
    return(
        <div className="Meeting_Chathing_aria">
            <Friend_list/>
            <Chatting/>
        </div>
    )
}

export default Meeting_Chathing