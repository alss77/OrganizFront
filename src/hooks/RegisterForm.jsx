import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router';
import { register } from '../store/actions/authActions';
import { initSocket } from '../store/actions/socketActions';
import fr from '../lang/fr';
import en from '../lang/en';

counterpart.registerTranslations('fr', fr);
counterpart.registerTranslations('en', en);

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

function RegisterForm(props) {
  const [profile, setProfile] = React.useState({
    firstName: '', lastName: '', email: '', password: '',
  });
  const cardTitle = <Translate content="login.connect" />;
  const classes = useStyles();

  useEffect(() => {
    if (props.isAuthentificated) {
      props.push(`/${props.user.firstName}/${props.user.lastName}/dashboard`);
    }
  });

  const handleChange = (event) => {
    const {
      name, value,
    } = event.target;
    setProfile({
      ...profile, [name]: value,
    });
  };

  const handleSubmit = () => {
    props.register(profile);
    props.initSocket();
  };

  return (
    <div className={classes.container}>
      <Translate className={classes.h1} component="h1" content="welcome" />
      <Card className={classes.card}>
        <CardHeader
          title={cardTitle}
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">
            <Translate content="register.first" />
          </InputLabel>
          <Input name="firstName" id="firstName" value={profile.firstName} onChange={handleChange} />
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">
            <Translate content="register.last" />
          </InputLabel>
          <Input name="lastName" id="lastName" value={profile.lastName} onChange={handleChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Mail</InputLabel>
          <Input name="email" id="email" value={profile.email} onChange={handleChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">
            <Translate content="register.password" />
          </InputLabel>
          <Input name="password" id="password" value={profile.password} onChange={handleChange} />
        </FormControl>
        <Button variant="contained" onClick={handleSubmit}>
          <Translate content="register.button" />
        </Button>
      </Card>
    </div>
  );
}

RegisterForm.propTypes = {
  isAuthentificated: PropTypes.bool,
  initSocket: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([PropTypes.object]),
  register: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  lang: PropTypes.string,
};

RegisterForm.defaultProps = {
  isAuthentificated: false,
  user: null,
  lang: '',
};

const mapStateToProps = (state) => ({
  isAuthentificated: state.auth.isAuthentificated,
  user: state.auth.user,
  lang: state.lang.lang,
});

export default connect(mapStateToProps, { register, push, initSocket })(RegisterForm);
