import React, { useState, useEffect } from "react";
import Auto from "../components/Auto";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as io from "socket.io-client";
var socket;
socket = io("http://localhost:5000");
const optionsCommand = ["optionsCommand 1", "optionsCommand 2"];
const optionsController = ["optionsController 1", "optionsCommand 2"];
const optionsCom = ["optionsCom 1", "optionsCom 2"];
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const UpdateProgram = () => {
  const classes = useStyles();
  var templist = [];
  socket.on("list_of_commands_response", (reply) => {
    if (reply) {
      templist = reply;
    } else {
      alert("error");
    }
  });
  socket.emit("get_list_of_commands");
  // const onSubmitFunc = (e) => {
  //   e.preventDefault();
  //   socket.emit("get_list_of_commands");
  // };

  return (
    <div>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            UpdateProgram
          </Typography>
          <form className={classes.form} noValidate>
            <br />
            <Auto options={templist} lable="command" id="command" fullWidth />
            <br />
            <Auto
              options={optionsController}
              lable="controller"
              id="controller"
              fullWidth
            />
            <br />
            <Auto options={optionsCom} lable="com" id="Com" fullWidth />
            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submit}>
              submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UpdateProgram;
