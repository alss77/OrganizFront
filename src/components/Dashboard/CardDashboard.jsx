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
import { initGroup, initTask, loadingtoggle } from '../../store/actions/socketActions';
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
  isLoaded: state.socket.isLoaded,
});

function CardDashboard(props) {
  const classes = useStyles();
  const hello = <Translate content="dashboard.hello" />;
  const subheader = <Translate content="dashboard.subheader" />;
  const [activeGroup, changeActive] = useState('');
  const {
    user, groupList, socket, isLoaded,
  } = props;

  useEffect(() => {
    props.loadingtoggle();
    if (groupList.length === 0) {
      props.initGroup(user);
    }
  }, [props, groupList, user]);

  useEffect(() => {
    if (isLoaded && activeGroup !== '') {
      props.push(`/group/${activeGroup}`);
      props.loadingtoggle();
    }
  }, [props, isLoaded, activeGroup]);

  const listclick = async (lname) => {
    changeActive(lname);
    await props.initTask(lname, groupList, socket);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title={`${hello} ${user.firstName} ${user.lastName}`}
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
  loadingtoggle: PropTypes.func.isRequired,
  initGroup: PropTypes.func.isRequired,
  initTask: PropTypes.func.isRequired,
  groupList: PropTypes.oneOfType([PropTypes.array]),
  user: PropTypes.oneOfType([PropTypes.object]),
  push: PropTypes.func.isRequired,
  socket: PropTypes.oneOfType([PropTypes.object]),
  isLoaded: PropTypes.bool,
  lang: PropTypes.string,
};

CardDashboard.defaultProps = {
  groupList: [],
  user: null,
  socket: null,
  isLoaded: false,
  lang: '',
};

export default connect(mapStateToProps, {
  initGroup, push, initTask, loadingtoggle,
})(CardDashboard);
