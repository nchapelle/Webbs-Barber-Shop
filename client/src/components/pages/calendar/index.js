import React, { useState, useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../../../context/auth/authContext"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Calendar = props => {
  const classes = useStyles();
  // componentDidMount = () => {
  //     this.getEvents();
  //   };
  // getEvents(){
  // let that = this;
  // function start() {
  //     gapi.client.init({
  //     'apiKey': GOOGLE_API_KEY
  //     }).then(function() {
  //     return gapi.client.request({
  //         'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
  //     })
  //     }).then( (response) => {
  //     let events = response.result.items
  //     that.setState({
  //         events
  //     }, ()=>{
  //         console.log(that.state.events);
  //     })
  //     }, function(reason) {
  //     console.log(reason);
  //     });
  // }
  // gapi.load('client', start)
  // };

  return (
    <Container>
      <CssBaseline />
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
    </Container>
  );
};
export default Calendar;
