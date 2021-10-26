import React from "react"
import Header from "./Main_Page_file/Header_";
import Body from "./Main_Page_file/Body";
import Banner from "./Main_Page_file/img/Banner2.png";
import Confirm from "./Main_Page_file/Confirm";
import "./Main_Page.css"

function Main_PAGE() {
  return (
    <div className="App">
      <Header/>
      <div className="Banner_plus_Body">
        <img src={Banner} width="1520px" height="520px"/>
        <Body/>
      </div>
      <Confirm/>
    </div>
  );
}

export default Main_PAGE
;
