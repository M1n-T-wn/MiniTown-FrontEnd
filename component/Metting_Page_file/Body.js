import React, { useState } from "react";
import Searh_aria from "./Searh_aria";
import Metting from "./Metting";

function Body({img_arr,index}){
    return(
        <div className="Me_body">
            <Searh_aria/>
            <Metting img_arr={img_arr} index={index}/>
        </div>
    )
}

export default Body