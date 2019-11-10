import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import { Link } from '@material-ui/core';
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

function NavBar() {
  const classes = useStyles();

  useEffect(() => {
    counterpart.setLocale(localStorage.getItem('lang') || 'fr');
  });

  const setLangFr = () => {
    localStorage.setItem('lang', 'fr');
    counterpart.setLocale(localStorage.getItem('lang'));
  };

  const setLangEn = () => {
    localStorage.setItem('lang', 'en');
    counterpart.setLocale(localStorage.getItem('lang'));
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

export default NavBar;
