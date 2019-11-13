import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
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
    props.push('/login');
  };

  return (
    <div className={classes.container}>
      <Helmet>
        <style>{'body { background-color: #F7F5FF; }'}</style>
      </Helmet>
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
          <InputLabel password="true" htmlFor="component-simple">
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
  initSocket: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export default connect(null, { register, push, initSocket })(RegisterForm);
