import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";

function Nav({ displayStatus, iconType, seed }) {
  const [display, setDisplay] = useState("login");

  useEffect(() => {
    displayStatus(display);
  }, [display]);

  return (
    <div className="nav">
      <Avatar
        src={`https://avatars.dicebear.com/api/${iconType}/${seed}.svg`}
      />
      <button onClick={() => setDisplay("login")}>Login</button>
      <button onClick={() => setDisplay("welcome")}>Welcome</button>
    </div>
  );
}

export default Nav;
