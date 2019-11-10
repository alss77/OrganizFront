import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types/prop-types';
import { push } from 'connected-react-router';
import {
  initGroup, initTask, loadingtoggle, initId,
} from '../../store/actions/socketActions';
import fr from '../../lang/fr';
import en from '../../lang/en';

counterpart.registerTranslations('fr', fr);
counterpart.registerTranslations('en', en);

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
    backgroundColor: '#3F51B5',
  },
  list: {
    width: 500,
    backgroundColor: '#9FA8DA',
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
    backgroundColor: '#9FA8DA',
    padding: 0,
    width: '100%',
  },
}));

const mapStateToProps = (state) => ({
  user: state.auth.user,
  socket: state.socket.socket,
  groupList: state.socket.groupList,
  token: state.auth.token,
  isLoaded: state.socket.isLoaded,
});

function CardDashboard(props) {
  const classes = useStyles();
  const subheader = <Translate content="dashboard.subheader" />;
  const [activeGroup, changeActive] = useState('');
  const {
    user, groupList, socket, isLoaded,
  } = props;
  const [init, changeInit] = useState(0);

  useEffect(() => {
    if (init === 0) {
      props.loadingtoggle();
      if (groupList.length === 0) {
        props.initGroup(user);
        props.loadingtoggle();
      }
      changeInit(1);
    }
  }, [props, groupList, user, init]);

  useEffect(() => {
    if (isLoaded && activeGroup.length > 0) {
      props.push(`/group/${activeGroup}`);
      props.loadingtoggle();
    }
  }, [props, isLoaded, activeGroup]);

  const listclick = async (lname) => {
    changeActive(lname);
    await props.initTask(lname, groupList, socket);
    props.initId(groupList, lname);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title={`${user.firstName} ${user.lastName}`}
        subheader={subheader}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          <Translate content="dashboard.id" />
          {user.id}
        </Typography>
        <List className={classes.list} subheader={<li />}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.header}>
              <Translate content="dashboard.groupList" />
            </ListSubheader>
            {
              (groupList.length === 0) ? (
                <Typography>
                  <Translate content="dashboard.groupInfo" />
                </Typography>
              ) : (
                  groupList.map(({ name, id }) => (
                    <ListItem button key={id} onClick={() => listclick(name)}>
                      <ListItemText primary={name} key={name} />
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
  loadingtoggle: PropTypes.func.isRequired,
  initGroup: PropTypes.func.isRequired,
  initTask: PropTypes.func.isRequired,
  groupList: PropTypes.oneOfType([PropTypes.array]),
  user: PropTypes.oneOfType([PropTypes.object]),
  push: PropTypes.func.isRequired,
  socket: PropTypes.oneOfType([PropTypes.object]),
  isLoaded: PropTypes.bool,
  initId: PropTypes.func.isRequired,
};

CardDashboard.defaultProps = {
  groupList: [],
  user: null,
  socket: null,
  isLoaded: false,
};

export default connect(mapStateToProps, {
  initGroup, push, initTask, loadingtoggle, initId,
})(CardDashboard);
