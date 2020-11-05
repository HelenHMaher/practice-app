import React from "react";

function Robot({ getIconType }) {
  return (
    <div>
      <p>Are you a robot?</p>
      <button onClick={() => getIconType("bottts")}>
        I am definitely a robot.
      </button>
      <button onClick={() => getIconType("avataaars")}>
        No, how dare you. I am human.
      </button>
    </div>
  );
}

export default Robot;
