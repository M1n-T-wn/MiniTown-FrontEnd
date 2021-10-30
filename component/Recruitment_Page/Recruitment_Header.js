import React from "react";
import Back from "./img/뒤로가기.png";

function Recruitment_Header() {
  return (
    <div className="Re_Header">
      <div className="Re_Header_flex1">
        <div className="Re_Header_BackImg"><img src={Back} width="50px" height="50px"/></div>
        <span className="Re_Header_Text">모집 글쓰기</span>
      </div>
      <div className="Re_Header_flex">
        <div className="Re_Header_line" />
      </div>
    </div>
  );
}

export default Recruitment_Header;
