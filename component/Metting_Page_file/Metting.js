import React, { useEffect, useState } from "react";

function Metting({img_arr,index}) {
    const [metting_array,setMetting_array] = useState({
        metting_line:[]    
    })
    useEffect(()=>{
        let img_arr_copy = [...metting_array.metting_line];
        let img_OB = {
            img_url:img_arr.img[index].url,
            title:"title",
            categori:"categori",
            text:"text"
        }
        img_arr_copy.push(img_OB);
        setMetting_array({metting_line:img_arr_copy})
    },[])
    const Metting_map = metting_array.metting_line.map((e)=>{
        return(
            <div className="Me_body_MettingBox" key={e.text}>
                <img src={e.img_url} width="320px" height="170px" />
                <div className="Me_body_MettingBox_Text_aria">
                    <div div className="Me_body_MettingBox_title">{e.title}</div>
                    <div className="Me_body_MettingBox_categori_text">{e.categori}</div>
                    <div className="Me_body_MettingBox_Main_Text">{e.text}</div>
                </div>
            </div>
      )
    })
  return (
      <div>
          <button onClick={()=>{console.log(img_arr)}}>asdasdasdasd</button>
          {Metting_map}
      </div>
      
    // <div className="Me_body_MettingBox">
    //   <img src={img_arr.img[index].url} width="320px" height="170px" />
    //   <div className="Me_body_MettingBox_Text_aria">
    //     <div className="Me_body_MettingBox_title">
    //       배구 동호회 스파이크 팡팡
    //     </div>
    //     <div className="Me_body_MettingBox_categori_text">스포츠</div>
    //     <div className="Me_body_MettingBox_Main_Text">
    //        10대부터 20대 분들까지 다양한 분들이 참여하는 배구 동호회 입니다. 저희
    //       활동은 주로 주말에
    //     </div>
    //   </div>
    // </div>
  );
}

export default Metting;
