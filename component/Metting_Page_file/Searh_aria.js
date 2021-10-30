import React, { useState } from "react";
import Search from "./img/Search.png";

function Searh_aria() {
  const [onoff, setOnoff] = useState(true);

  const onStyle = {
    backgroundColor: "rgba(73, 147, 250, 1)",
  };
  const offStyle = {
    backgroundColor: "rgba(205, 205, 205, 1)",
  };
  return (
    <div className="Me_body_Search_aria">
      <div className="Me_body_Search_aria_OnOff">
        온라인 모임 / 오프라인 모임
      </div>
      <div className="Me_body_OnOff_input_aria">
        <input
          value="온라인"
          className="Re_body_OnOff_OnlineButton"
          type="button"
          style={onoff ? onStyle : offStyle}
          onClick={() => {
            setOnoff(true);
          }}
        />
        <input
          value="오프라인"
          className="Me_body_OnOff_OfflineButton"
          type="button"
          style={!onoff ? onStyle : offStyle}
          onClick={() => {
            setOnoff(false);
          }}
        />
      </div>
      <div className="Me_body_Search_aria_Search">검색</div>
      <div className="Me_body_Search_aria_Search_box">
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          className="Me_body_Search_aria_Search_box_input"
        />
        <div className="Me_body_Search_aria_Search_box_img">
          <img src={Search} />
        </div>
      </div>
      <div className="Me_body_Search_aria_Search_box_line"></div>
      <div className="Me_body_Search_aria_categori">
         카테고리
      </div>
    </div>
  );
}

export default Searh_aria;
