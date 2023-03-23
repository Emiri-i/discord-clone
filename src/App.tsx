import React from "react";
import "./App.scss";
import Sidebar from "./component/sidebar/Sidebar";
import Chat from "./component/chat/Chat";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
