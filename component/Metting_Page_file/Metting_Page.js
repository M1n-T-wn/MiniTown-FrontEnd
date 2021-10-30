import React from "react"
import Header from "./Header"
import Body from "./Body"
import "./Metting_Page.css"

function Metting_Page({img_arr,index}) {
    return(
        <div className="metting_all">
            <Header/>
            <Body img_arr={img_arr} index={index}/>
        </div>
    )
}

export default Metting_Page