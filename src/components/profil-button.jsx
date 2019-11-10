import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import fr from '../lang/fr';
import en from '../lang/en';

counterpart.registerTranslations('fr', fr);
counterpart.registerTranslations('en', en);

const options = [
  <Translate content="disconnect" />,
];

const ITEM_HEIGHT = 48;

function LongMenu(props) {
  const { lang } = props;
  counterpart.setLocale(lang);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircle />
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
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

LongMenu.propTypes = {
  changeLang: PropTypes.func.isRequired,
  lang: PropTypes.string,
};

LongMenu.defaultProps = {
  lang: '',
};

const mapStateToProps = (store) => ({
  lang: store.langReducer.lang,
});

export default connect(mapStateToProps, null)(LongMenu);
