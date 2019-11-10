import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import counterpart from 'counterpart';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuButton from './Menu';
import ProfilButton from './Profil';
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
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

function Header() {
  const classes = useStyles();

  useEffect(() => {
    counterpart.setLocale(localStorage.getItem('lang') || 'fr');
  });

  const setLangFr = () => {
    console.log('set to fr');
    counterpart.setLocale(localStorage.getItem('lang'));
    localStorage.setItem('lang', 'fr');
  };

  const setLangEn = () => {
    console.log('set to en');
    counterpart.setLocale(localStorage.getItem('lang'));
    localStorage.setItem('lang', 'en');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuButton />
          <Typography className={classes.title} variant="h5" noWrap>
            Organiz
          </Typography>
          <button type="button" onClick={setLangFr}>
            FR
          </button>
          <button type="button" onClick={setLangEn}>
            EN
          </button>
          <ProfilButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
