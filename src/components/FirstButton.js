import React, { useState } from "react";
import useInputState from "../hooks/useInputState";
import TextField from "@material-ui/core/TextField";

function FirstButton({ id, task, editTodo, toggleEditForm }) {
  const [name, setName] = useState(true);

  function chooseCousin(params) {}

  return (
    <div>
      <button onClick={() => setName(!name)}> Who is the best cousin? </button>
      <h1>wait for it {name ? "Adi" : "Nevo"}</h1>
    </div>
  );
}
export default FirstButton;
