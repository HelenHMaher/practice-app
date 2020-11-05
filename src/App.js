import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Login from "./components/Login";

function App() {
  const [newName, setNewName] = useState("");
  const [newBirthday, setNewBirthday] = useState("");
  const [display, setDisplay] = useState("login");
  const [iconType, setIconType] = useState("jdenticon");
  const [seed, setSeed] = useState("");

  const getIconType = (iconType) => setIconType(iconType);

  const passInfo = (name, birthday) => {
    setNewName(name);
    setNewBirthday(birthday);
  };
  const displayStatus = (status) => setDisplay(status);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="App">
      <Nav displayStatus={displayStatus} iconType={iconType} seed={seed} />
      {display === "login" ? (
        <Login passInfo={passInfo} />
      ) : (
        <Welcome
          name={newName}
          birthday={newBirthday}
          getIconType={getIconType}
        />
      )}
    </div>
  );
}

export default App;
