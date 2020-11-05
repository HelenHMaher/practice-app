import React from "react";
import DisplayBirthday from "./DisplayBirthday";
import Robot from "./Robot";

function Welcome({ name, birthday, getIconType }) {
  return (
    <div>
      <h1>Welcome</h1>
      {name ? <DisplayBirthday name={name} birthday={birthday} /> : <></>}
      <Robot getIconType={getIconType} />
    </div>
  );
}

export default Welcome;
