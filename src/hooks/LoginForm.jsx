import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { login } from '../store/actions/authActions';
import { initSocket, loadingtoggle } from '../store/actions/socketActions';
import fr from '../lang/fr';
import en from '../lang/en';

counterpart.registerTranslations('fr', fr);
counterpart.registerTranslations('en', en);

const mapStateToProps = (state) => ({
  isAuthentificated: state.auth.isAuthentificated,
  user: state.auth.user,
  lang: state.lang.lang,
});

const useStyles = makeStyles((theme) => ({
  h1: {
    width: '100%',
    marginBottom: 50,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  card: {
    width: '50%',
    float: 'center',
  },
  formControl: {
    margin: theme.spacing(5),
  },
}));

function LoginForm(props) {
  const [profile, setProfile] = React.useState({ email: '', password: '' });
  const cardTitle = <Translate content="login.connect" />;
  const classes = useStyles();

  useEffect(() => {
    if (props.isAuthentificated && props.user != null) {
      props.push(`/${props.user.firstName}/${props.user.lastName}/dashboard`);
      props.loadingtoggle();
    }
  }, [props]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async () => {
    await props.login(profile);
    props.initSocket();
  };

  return (
    <div className={classes.container}>
      <Translate className={classes.h1} component="h1" content="welcome" />
      <Card className={classes.card}>
        <CardHeader title={cardTitle} />
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="component-simple">Mail</InputLabel>
            <Input
              name="email"
              id="email"
              value={profile.email}
              onChange={handleChange}
            />
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="component-simple">
              <Translate content="login.password" />
            </InputLabel>
            <Input
              name="password"
              id="password"
              value={profile.password}
              onChange={handleChange}
            />
          </FormControl>
        </div>
        <div>
          <Button variant="contained" onClick={() => handleSubmit()}>
            <Translate content="login.button" />
          </Button>
        </div>
      </Card>
    </div>
  );
}

LoginForm.propTypes = {
  isAuthentificated: PropTypes.bool,
  initSocket: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([PropTypes.object]),
  login: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  loadingtoggle: PropTypes.func.isRequired,
  lang: PropTypes.string,
};

LoginForm.defaultProps = {
  isAuthentificated: null,
  user: null,
  lang: '',
};

export default connect(
  mapStateToProps,
  {
    login, push, initSocket, loadingtoggle,
  },
)(LoginForm);
