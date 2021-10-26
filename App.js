import React from "react"
import io from "socket.io-client"
import Main_PAGE from "./component/Main_PAGE";
import Setting_PAGE from "./component/Setting_PAGE";
import './App.css';

function App() {
  return (
    // <Main_PAGE/>
    <Setting_PAGE/>
  );
}

export default App;
