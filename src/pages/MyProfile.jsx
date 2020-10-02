import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/NavBar";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Username", "Adi Strauss"),
  createData("Password", "12345678"),
  createData("Authorization", "CEO"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Container component="main" maxWidth="md">
        <br />
        <Typography component="h1" variant="h5">
          My Profile
        </Typography>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
