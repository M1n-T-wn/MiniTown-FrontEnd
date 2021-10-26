import React from "react";
import lo4 from "./img/설정.png"

function Logic4() {
  return (
    <div className="logic_box">
      <div className="logic_img">
        <img src={lo4} width="95px" height="95px" />
      </div>
      <span className="logic_title">설정</span>
      <span className="logic_main_text">
      앱을 자신에게 맞게<br/> 설정 해보세요
      </span>
    </div>
  );
}

export default Logic4;
