import React, { useState } from "react";
import Welcome from "./Welcome";

function Login({ passInfo }) {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = () => {
    passInfo(name, birthday);
    setName("");
    setBirthday("");
  };

  return (
    <div className="login">
      <form className="login__form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="login__name"
          type="text"
          placeholder="type your name"
        />
        <input
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="login__birthday"
          type="date"
        />
        <button
          onClick={handleSubmit}
          className="login__submit"
          disabled={!name || !birthday}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Login;
