import React from "react";
import lo3 from "./img/물품대여.png"

function Logic3() {
  return (
    <div className="logic_box">
      <div className="logic_img">
        <img src={lo3} width="95px" height="95px" />
      </div>
      <span className="logic_title">물품 대여</span>
      <span className="logic_main_text">
      모임에서 필요한<br/> 물품을 신청하세요
      </span>
    </div>
  );
}

export default Logic3;
