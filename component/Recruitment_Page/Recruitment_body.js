import React, { useState, useRef } from "react";
import axios from "axios";
import add_img from "./img/add_img.png";

function Recruitment_body({img_arr,setImg_arr,index}) {
  const img_ref = useRef();
  //State 저장소
  const [Title, setTitle] = useState("");
  const [Kategorie, setKategorie] = useState("");
  const [Age, setAge] = useState("");
  const [Day, setDay] = useState("");
  const [MeetingName, setMeetingName] = useState("");
  const [MemberNum, setMemberNum] = useState("");
  const [Explanation, setExplanation] = useState("");
  const [onoff,setOnoff] = useState(true);
 

  //function 저장소
  const check_Button = ()=>{
    let post_json = {
      name:Title,
      OnOffline: (onoff ? "ONLINE":"OFFLINE"),
      MeetingCategory:Kategorie
    }
    axios.post("",)
  }
  const OnImgChange = (e) => {
    if (e.target.files[0] !== undefined) {
      let IMGARRAY = [...img_arr.img];
      let IMG = {
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      };
      IMGARRAY.push(IMG);
      index++;
      setImg_arr({ img: IMGARRAY });
    }
  };
  const OnImgClick = () => {};
  //map함
  const img_map = img_arr.img.map((e) => {
    return (
      <div className="Re_Body_img_map" key={e.file}>
        <img src={e.url} width="120px" height="120px" />
      </div>
    );
  });

  const onStyle = {
    backgroundColor:"rgba(73, 147, 250, 1)"
  }
  const offStyle = {
    backgroundColor:"rgba(205, 205, 205, 1)"
  }
  return (
    <div className="Re_Body">
      {/* <button
        onClick={() => {
          console.log(body);
        }}
      >
        sddddddddd
      </button> */}
      <div className="Re_body_Onearia">
        <span className="Re_body_One_title">온라인 / 오프라인</span>
        <div className="Re_body_OnOff_input_aria">
          <input
            value="온라인"
            className="Re_body_OnOff_OnlineButton"
            type="button"
            style={onoff ? onStyle : offStyle}
            onClick={()=>{setOnoff(true)}}
          />
          <input
            value="오프라인"
            className="Re_body_OnOff_OfflineButton"
            type="button"
            style={!onoff ? onStyle : offStyle}
            onClick={()=>{setOnoff(false)}}
          />
        </div>
      </div>
      <div className="Re_body_line" />
      <div className="Re_body_Onearia_img">
        <div className="Re_body_img_title">이미지 등록하기</div>
        <div className="Re_body_img_aria">
          <input
            type="file"
            ref={img_ref}
            accept="image/*"
            onChange={OnImgChange}
            className="None"
          />
          <img
            src={add_img}
            alt=""
            onClick={() => {
              img_ref.current.click();
            }}
          />
          <div className="Re_body_plus_img">{img_map}</div>
        </div>
      </div>
      <div className="Re_body_line" />
      <div className="Re_body_Onearia" name="Re_body_title">
        <div className="Re_body_title">제목</div>
        <div className="Re_body_title_input_aria">
          <input
            className="Re_body_title_input"
            placeholder="제목을 입력해주세요"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="Re_body_line" />
      <div className="Re_body_Onearia" name="Re_body_Kategorie">
        <div className="Re_body_One_title">카테고리</div>
        <div className="Re_body_Kategorie_input_aria">
          <select
            onChange={(e) => {
              setKategorie(e.target.value);
            }}
            className="Re_body_Kategorie_input"
          >
            <option value="TRAVEL">여행</option>
            <option value="MUSIC">음악</option>
            <option value="SPORTS">스포츠</option>
            <option value="STUDY">스터디</option>
            <option value="MAKING">수공예</option>
            <option value="ELSE">기타</option>
          </select>
        </div>
      </div>
      <div className="Re_body_line" />
      <div className="Re_body_Onearia" name="Re_body_age">
        <div className="Re_body_One_title">가장많은 나이대</div>
        <div className="Re_body_Age_input_aria">
          <select
            className="Re_body_Age_input"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          >
            <option value="10대">10대</option>
            <option value="20대">20대</option>
            <option value="30대">30대</option>
            <option value="40대">40대</option>
          </select>
        </div>
      </div>
      <div className="Re_body_line" />
      <div className="Re_body_Onearia" name="Re_body_day">
        <div className="Re_body_One_title">활동하는 요일</div>
        <div className="Re_body_day_input_aria">
          <select
            className="Re_body_day_input"
            onChange={(e) => {
              setDay(e.target.value);
            }}
          >
            <option value="평일">평일</option>
            <option value="주말">주말</option>
            <option value="불특정">불특정</option>
          </select>
        </div>
      </div>
      <div className="Re_body_line" />
      <div className="Re_body_Onearia" name="Re_body_meeting_name">
        <div className="Re_body_title">동호회명</div>
        <div className="Re_body_meeting_name_input_aria">
          <input
            className="Re_body_meeting_name_input"
            placeholder="동호회명을 입력해주세요"
            onChange={(e) => {
              setMeetingName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="Re_body_line" />
      <div className="Re_body_Onearia" name="Re_body_member_num">
        <div className="Re_body_One_title">현재 회원수</div>
        <div className="Re_body_member_num_input_aria">
          <input
            className="Re_body_member_num_input"
            placeholder="회원수를 입력해주세요"
            onChange={(e) => {
              setMemberNum(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="Re_body_line" />
      <div className="Re_body_Onearia_Explanation">
        <div className="Re_body_Explanation_title">동호회 설명</div>
        <div className="Re_body_Explanation_aria">
          <textarea
            className="Re_body_Explanation"
            onChange={(e) => {
              setExplanation(e.target.value);
            }}
          />
          <input type="button" className="Re_body_check" value="확인" />
        </div>
      </div>
    </div>
  );
}

export default Recruitment_body;
