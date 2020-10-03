import React from "react";
import "./styles.css";
import UpdateProgram from "./pages/UpdateProgram";
import SignInPage from "./pages/SignInPage";
import UserManagement from "./pages/UserManagement";
import MyProfile from "./pages/MyProfile";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Theme from "./Theme";
import { makeStyles } from "@material-ui/core/styles";

export default function App() {
  return (
    <Theme>
      <div>
        <div>
          <Switch>
            <Route
              exact
              from="/"
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
            <Route
              exact
              path="/SignInPage"
              render={(props) => <SignInPage {...props} />}
            />
          </Switch>
        </div>
      </div>
    </Theme>
  );
}
