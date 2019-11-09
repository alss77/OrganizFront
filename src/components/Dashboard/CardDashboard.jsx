import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types/prop-types';
import { push } from 'connected-react-router';
import { initGroup, initTask } from '../../store/actions/socketActions';

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
  user: state.auth.user,
  socket: state.socket.socket,
  groupList: state.socket.groupList,
  token: state.auth.token,
});

function CardDashboard(props) {
  const classes = useStyles();
  const { user, groupList, token } = props;

  useEffect(() => {
    if (groupList.length === 0) {
      props.initGroup(user);
    }
  }, [props, groupList, user]);

  const listclick = async (lname) => {
    await props.initTask(lname, groupList /* token */);
    props.push(`/group/${lname}`);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title={`Bonjour ${user.firstName} ${user.lastName}`}
        subheader="Vous trouverez ici vos tâches et groupes auquel vous appartenez"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          Voici votre ID:
          {user.id}
        </Typography>
        <List className={classes.list} subheader={<li />}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.header}>Liste de vos Groupes</ListSubheader>
            {
              (groupList.empty) ? (
                <Typography> Vous ne faites parti de aucun groupe</Typography>
              ) : (
                  groupList.map(({ name }) => (
                    <ListItem button onClick={() => listclick(name)} key={name}>
                      <ListItemText primary={name} />
                    </ListItem>
                  ))
                )
            }
          </ul>
        </List>
      </CardContent>
    </Card>
  );
}

CardDashboard.propTypes = {
  initGroup: PropTypes.func.isRequired,
  initTask: PropTypes.func.isRequired,
  groupList: PropTypes.oneOfType([PropTypes.array]),
  user: PropTypes.oneOfType([PropTypes.object]),
  push: PropTypes.func.isRequired,
  token: PropTypes.string,
};

CardDashboard.defaultProps = {
  groupList: [],
  user: null,
  token: '',
};

export default connect(mapStateToProps, { initGroup, push, initTask })(CardDashboard);
