import React from "react";

function Welcome({ name, birthday }) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        {name} your birthday is {birthday}!!
      </p>
    </div>
  );
}

export default Welcome;
