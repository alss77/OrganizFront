import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import { push } from 'connected-react-router';
import fr from '../lang/fr';
import en from '../lang/en';

counterpart.registerTranslations('fr', fr);
counterpart.registerTranslations('en', en);

const options = [
  <Translate content="menu_button.dashboard" />,
];

const screen = [
  '/',
];

const ITEM_HEIGHT = 48;

function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    props.push(`/${props.user.firstName}/${props.user.lastName}/dashboard`)
    setAnchorEl(null);
  };

  const changeScreen = (option) => (screen[options.indexOf(option)]);

  return (
    <div>
      <IconButton
        aria-label="menu"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {options.map((option) => (
          <Link key={option} to={changeScreen(option)}>
            <MenuItem key={option} onClick={handleClose}>
              {option}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}

LongMenu.propTypes = {
  push: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([PropTypes.object]),
};

LongMenu.defaultProps = {
  user: null,
};

const mapStateToProps = (store) => ({
  user: store.auth.user,
});

export default connect(mapStateToProps, { push })(LongMenu);
