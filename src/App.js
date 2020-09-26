import React from "react";
import "./styles.css";
import Home from "./pages/Home";
import UpdateProgram from "./pages/UpdateProgram";
import UserManagement from "./pages/UserManagement";
import MyProfile from "./pages/MyProfile";

import { Route, Switch } from "react-router-dom";
import Drawer from "./components/Drawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/UpdateProgram"
          render={(props) => <UpdateProgram {...props} />}
        />
        <Route
          exact
          path="/UserManagement"
          render={(props) => <UserManagement {...props} />}
        />
        <Route
          exact
          path="/MyProfile"
          render={(props) => <MyProfile {...props} />}
        />
      </Switch>
    </div>
  );
}
