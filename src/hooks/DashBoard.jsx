import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loaduser } from '../store/actions/authActions';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 5,
    marginBottom: 2,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: '100%',
    minHeight: 800,
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'purple',
  },
  list: {
    width: 500,
    backgroundColor: 'green',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'auto',
    maxHeight: 200,
    marginBottom: 5,
  },
  listSection: {
    backgroundColor: 'inherit',
    position: 'center',
  },
  ul: {
    backgroundColor: 'green',
    padding: 0,
    width: '100%',
  },
}));

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

function DashBoard(props) {
  const classes = useStyles();

  useEffect(() => {
    console.log('token : ' + props.token);
    props.loaduser(props.token);
  });

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title="Bonjour NOM + PRENOM"
          subheader="Vous trouverez ici vos tâches et groupes auquel vous appartenez"
        />
        <CardContent>
          <List className={classes.list} subheader={<li />}>
            <ul className={classes.ul}>
              <ListSubheader className={classes.header}>Liste de vos Groupes</ListSubheader>
              {[0, 1, 2, 4, 5, 6, 7].map((item) => (
                <ListItem alignItems="center" key={`item-${item}`}>
                  <ListItemAvatar>
                    <Avatar>{`${item}`}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </List>
          { /* <List className={classes.list} subheader={<li />}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.header}>Liste de vos Tâches</ListSubheader>
            {[0, 1, 2, 4, 5, 6, 7].map((item) => (
              <ListItem alignItems="flex-start" key={`item-${item}`}>
                <ListItemAvatar>
                  <Avatar>{`${item}`}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
            </List> */ }
        </CardContent>
      </Card>
    </div>
  );
}

DashBoard.propTypes = {
  loaduser: PropTypes.func.isRequired,
  token: PropTypes.string,
};

DashBoard.defaultProps = {
  token: '',
};

export default connect(mapStateToProps, { loaduser })(DashBoard);
