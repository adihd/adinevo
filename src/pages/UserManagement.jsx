import React from "react";
import Auto from "../components/Auto";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import NewUser from "./NewUser";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";
import CssBaseline from "@material-ui/core/CssBaseline";

import Button from "@material-ui/core/Button";

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
}));
const StyledDiv = styled.div`
  width: 100%;
`;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const UserManagement = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <NavBar />
      <StyledDiv>
        {/* <Typography component="h1" variant="h5">
        UserManagement
      </Typography> */}
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example">
            <Tab
              value="one"
              label="Create new user"
              wrapped
              {...a11yProps("one")}
            />
            <Tab value="two" label="Edit user" {...a11yProps("two")} />
            <Tab value="three" label="Delete user" {...a11yProps("three")} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index="one">
          <Typography component="h1" variant="h5"></Typography>
          <NewUser />
        </TabPanel>
        <TabPanel value={value} index="two">
          <EditUser />
        </TabPanel>
        <TabPanel value={value} index="three">
          <DeleteUser />
        </TabPanel>
      </StyledDiv>
    </div>
  );
};

export default UserManagement;
