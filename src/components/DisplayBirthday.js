import React from "react";
import "./displayBirthday.css";

function DisplayBirthday({ name, birthday }) {
  const date = Math.floor((new Date() - new Date(birthday)) / 31556952000);
  return (
    <div className="displayBirthday">
      <p>
        {name}, you are {date} year{date !== 1 && "s"} old!!
      </p>
    </div>
  );
}

export default DisplayBirthday;
