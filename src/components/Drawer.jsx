import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px",
  },
});

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <InboxIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "UserManagement",
      icon: <MailIcon />,
      onClick: () => history.push("/UserManagement"),
    },
    {
      text: "UpdateProgram",
      icon: <MailIcon />,
      onClick: () => history.push("/UpdateProgram"),
    },
    {
      text: "MyProfile",
      icon: <MailIcon />,
      onClick: () => history.push("/MyProfile"),
    },
    {
      text: "SignInPage",
      icon: <MailIcon />,
      onClick: () => history.push("/SignInPage"),
    },
  ];

  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
