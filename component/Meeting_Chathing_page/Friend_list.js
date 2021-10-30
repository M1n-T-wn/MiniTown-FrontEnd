import React from "react";
import Search from "./img/Search2.png";
import Chatting_room from "./Chatting_room";

function Friend_list() {
  return (
    <div className="Ch_list_box">
      <div className="Ch_list_title">채팅</div>
      <div className="Ch_list_aria">
        <input
          type="text"
          className="Ch_list_Search_box"
          placeholder="사용자 검색"
        ></input>
        <img className="Search_input_icon" src={Search} />
      </div>
      <div className="Chatting_room_list">
        <Chatting_room />
      </div>
    </div>
  );
}

export default Friend_list;
