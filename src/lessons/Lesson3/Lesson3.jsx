import React, { useState } from "react";
const Lesson3 = (props) => {
  const [name, setName] = useState("");
  return (
    <div>
      <label>Name: </label>
      <input
        type={"text"}
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <div>Your name 's ... {name} </div>
    </div>
  );
};

export default Lesson3;
