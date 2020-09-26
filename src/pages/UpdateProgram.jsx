import React from "react";
import Auto from "../components/Auto";
const optionsCommand = ["optionsCommand 1", "optionsCommand 2"];
const optionsController = ["optionsController 1", "optionsCommand 2"];
const optionsCom = ["optionsCom 1", "optionsCom 2"];

const UpdateProgram = () => {
  return (
    <div>
      <form action="">
        <br />
        <Auto options={optionsCommand} lable="command" id="command" />
        <br />
        <Auto options={optionsController} lable="controller" id="controller" />
        <br />
        <Auto options={optionsCom} lable="com" id="Com" />
      </form>
    </div>
  );
};

export default UpdateProgram;
