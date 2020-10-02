import { Box, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { withRouter } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const userAuth = 3;
  const { history } = props;
  const onLogout = (e) => {
    e.preventDefault();
    // console.log("adi");
    history.push("/SignInPage");
  };
  const itemsList = [
    {
      text: "UpdateProgram",
      auth: [1, 2, 3],
      onClick: () => history.push("/"),
    },
    {
      text: "UserManagement",
      auth: [3],
      onClick: () => history.push("/UserManagement"),
    },
    {
      text: "MyProfile",
      auth: [1, 2, 3],
      onClick: () => history.push("/MyProfile"),
    },
  ];

  return (
    <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
      <Typography>Netafim</Typography>
      <Box>
        {itemsList
          .filter((user) => user.auth.includes(userAuth))
          .map((item, index) => {
            const { text, userauthi, onClick } = item;
            return (
              <Button color="primary" onClick={onClick}>
                {text}
              </Button>
            );
          })}
      </Box>
      <Box flexGrow={1} textAlign="right">
        <Button
          onClick={onLogout}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default withRouter(NavBar);
