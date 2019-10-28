import React from 'react';
import { register } from '../store/actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    h1: {
        width: '100%',
        marginBottom: 50
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    card: {
        width: '50%',
        float: 'center'
    },
    formControl: {
        margin: theme.spacing(5),
  },
}));

function RegisterForm(props) {
  //const [labelWidth, setLabelWidth] = React.useState(0);
  const [profile, setProfile] = React.useState({firstName: '', lastName: '', email: '', password: ''});
  //const labelRef = React.useRef(null);
  const classes = useStyles();

  const handleChange = event => {
    const {name, value} = event.target;
    setProfile({...profile, [name]: value});
  };

  const handleSubmit = event => {
    event.preventDefault();
   props.register(profile);
  }

  return (
    <div className={classes.container}>
        <h1 className={classes.h1}>WELCOME TO ORGANIZ !</h1>
        <Card className={classes.card}>
            <CardHeader 
                title="Bonjour vous pouvez vous inscrire ici!"
            />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">First Name</InputLabel>
        <Input name="firstName" id="firstName" value={profile.firstName} onChange={handleChange} />
      </FormControl>
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">Last Name</InputLabel>
        <Input name="lastName" id="lastName" value={profile.lastName} onChange={handleChange} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">Mail</InputLabel>
        <Input name="email" id="email" value={profile.email} onChange={handleChange} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">Password</InputLabel>
        <Input name="password" id="password" value={profile.password} onChange={handleChange} />
      </FormControl>
      <Button variant="contained" onClick={handleSubmit} >
        Register
      </Button>
      </Card>
    </div>
  );
}

RegisterForm.propTypes = {
    isAuthentificated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthentificated: state.auth.isAuthentificated
})

export default connect(mapStateToProps, { register })(RegisterForm);