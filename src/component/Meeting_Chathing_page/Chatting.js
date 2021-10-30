import React from "react";
import menu from "./img/menu.png"
import Calendar from "./img/Calendar.png"
import arrow from "./img/arrow.png"

function Chatting() {
  return (
    <div className="Chatting_aria">
      <div className="Ch_Header_box">
        <div className="fake_img"></div>
        <div className="Ch_Header_name">title</div>
        <div className="Ch_Header_menu">
          <img src={menu} width="52px" height="12px" />
        </div>
      </div>
      <div className="Ch_input_box">
        <div className="Ch_input_Calendar_button"><img width="26px" height="29px" src={Calendar}/></div>
        <input className="Ch_input"/>
        <div className="send_button"><img width="38px" height="32px" src={arrow}/></div>
      </div>
    </div>
  );
}

export default Chatting;
