import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { login } from '../store/actions/authActions';


const mapStateToProps = (state) => ({
  isAuthentificated: state.auth.isAuthentificated,
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
  // const [labelWidth, setLabelWidth] = React.useState(0);
  const [profile, setProfile] = React.useState({ email: '', password: '' });
  // const labelRef = React.useRef(null);
  const classes = useStyles();

  useEffect(() => {
    if (props.isAuthentificated) {
      props.push('/dashboard');
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = () => {
    props.login(profile);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>WELCOME TO ORGANIZ !</h1>
      <Card className={classes.card}>
        <CardHeader title="Connectez-vous ici!" />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Mail</InputLabel>
          <Input
            name="email"
            id="email"
            value={profile.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <Input
            name="password"
            id="password"
            value={profile.password}
            onChange={handleChange}
          />
        </FormControl>
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </Card>
    </div>
  );
}

LoginForm.propTypes = {
  isAuthentificated: PropTypes.bool,
  // error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  isAuthentificated: null,
};

export default connect(
  mapStateToProps,
  { login, push },
)(LoginForm);
