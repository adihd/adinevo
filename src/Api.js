// api for the client side :)
import React, { useEffect } from "react";
import * as io from "socket.io-client";

var socket;
socket = io("http://localhost:5000");

// listening to the server
socket.on("list", (list) => {
  console.log(list);
  alert(list["controllers"]);
});

// calling the server
const clickHandler = () => {
  socket.emit("getlist", { message: "the test worked :)" });
};

const clickExitHandler = () => {
  socket.emit("exit");
};

const clickListPortsHandler = () => {
  socket.emit("list_of_ports");
};
