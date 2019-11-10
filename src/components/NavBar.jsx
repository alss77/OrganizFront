import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import { Link } from '@material-ui/core';
import { changeLang } from '../store/actions/langActions';
import fr from '../lang/fr';
import en from '../lang/en';

counterpart.registerTranslations('fr', fr);
counterpart.registerTranslations('en', en);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1),
  },
}));

function NavBar(props) {
  const classes = useStyles();
  const { lang } = props;
  counterpart.setLocale(lang);

  const setLangFr = () => {
    console.log('set to fr');
    props.changeLang('fr');
    counterpart.setLocale(lang);
  };

  const setLangEn = () => {
    console.log('set to en');
    props.changeLang('en');
    counterpart.setLocale(lang);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Organiz
          </Typography>
          <button type="button" onClick={setLangFr}>
            FR
          </button>
          <button type="button" onClick={setLangEn}>
            EN
          </button>
          <Link href="/login" color="inherit" className={classes.link}>
            <Translate content="login.login" />
          </Link>
          <Link href="/register" color="inherit" className={classes.link}>
            <Translate content="register.register" />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  changeLang: PropTypes.func.isRequired,
  lang: PropTypes.string,
};

NavBar.defaultProps = {
  lang: '',
};

const mapStateToProps = (store) => ({
  lang: store.lang.lang,
});

export default connect(mapStateToProps, { changeLang })(NavBar);
