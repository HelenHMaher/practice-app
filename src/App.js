import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Login from "./components/Login";

function App() {
  const [newName, setNewName] = useState("");
  const passInfo = (info) => setNewName(info);
  return (
    <div className="App">
      <Welcome name={newName} />
      <Login passInfo={passInfo} />
    </div>
  );
}

export default App;
