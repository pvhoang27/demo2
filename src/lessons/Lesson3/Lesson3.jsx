import React, { useState } from "react";
import CoolButton from "./CoolButton";
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
      <CoolButton />
    </div>
  );
};

export default Lesson3;
