import React, { useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import useTodoState from "../hooks/useTodoState";

import FirstButton from "./FirstButton";
import * as io from 'socket.io-client';

function SimpleApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );
  var socket;
  var message = '';
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  socket = io('http://localhost:5000');
  socket.on('list', (list) => {
    console.log(list)
    alert(list['controllers']);
    message = list;
  });
  const clickHandler = () => {
    console.log('=========== in handler')
    socket.emit('getlist', { message: 'zivi' });
  }
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Adi and Nevo</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          {/* <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          /> */}
          <FirstButton></FirstButton>
          <button onClick={clickHandler} >test socket</button>
          {message}
        </Grid>
      </Grid>
    </Paper>
  );
}
export default SimpleApp;
