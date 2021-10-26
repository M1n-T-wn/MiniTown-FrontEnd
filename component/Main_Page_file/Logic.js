import React from "react";
import lo1 from "./img/모임찾기.png";

function Logic() {
  return (
    <div className="logic_box">
      <div className="logic_img">
        <img src={lo1} width="95px" height="95px" />
      </div>
      <span className="logic_title">모임 찾기</span>
      <span className="logic_main_text">
        쉽고 빠르게 자신에게 <br />
        맞는 모임찾기
      </span>
    </div>
  );
}

export default Logic;
