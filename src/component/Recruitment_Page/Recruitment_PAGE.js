import React from "react";
import Header from "./Recruitment_Header";
import Body from "./Recruitment_body"
import "./Recruitment.css";

function Main_Recruitment({img_arr,setImg_arr,index}){
    return(
        <div>
            <Header/>
            <Body  img_arr_img={img_arr.img} img_arr={img_arr} index={index} setImg_arr={setImg_arr}/>
        </div>
    )
}

export default Main_Recruitment