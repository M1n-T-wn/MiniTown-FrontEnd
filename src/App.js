import React, { useState } from "react";
import io from "socket.io-client";
import Main_PAGE from "./component/Main_Page_file/Main_PAGE";
import Setting_PAGE from "./component/Setting_Page_file/Setting_PAGE";
import Recruitment_PAGE from "./component/Recruitment_Page/Recruitment_PAGE";
import Meetting_Page from "./component/Metting_Page_file/Metting_Page"
import Meeting_Chathing from "./component/Meeting_Chathing_page/Meeting_Chathing";


function App() {
  let i = 0;
  const [img_arr, setImg_arr] = useState({
    img:[],
  });
  return (
    <div className="bb">
      {/* <Meeting_Chathing/> */}
      {/* <Main_PAGE />
      <Setting_PAGE />  */}
      {/* <Recruitment_PAGE img_arr={img_arr} index={i} setImg_arr={setImg_arr} /> */}
      <Meetting_Page/>
    </div>
  );
}

export default App;