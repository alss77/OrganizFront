import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import ListTodos from '../components/ListTodos';

const useStyles = makeStyles({
  root: {
    marginTop: 2,
    marginBottom: 2,
  },
  profile: {
    height: 400,
  },
});

function DashBoard() {
  const classes = useStyles();
  return (
    <div style={{ background: 'red', height: '100%', width: '100%' }}>
      <NavBar />
      <Grid container direction="row" className={classes.root} spacing={5}>
        <Grid item xs>
          <ProfileCard className={classes.profile} />
        </Grid>
        <Grid item xs>
          <Grid item container direction="column" spacing={10}>
            <Grid item>
              <ListTodos />
            </Grid>
            <Grid item>
              <ListTodos />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashBoard;
