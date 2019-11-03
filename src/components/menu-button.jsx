import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const options = [
  'Accueil',
  'Liste des tâches',
  'Ajouter une tâche',
  'Liste des groupes',
];

const screen = [
  '/',
  '/task-list',
  '/task-form',
  '/group-list',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
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
          <Link to={changeScreen(option)}>
            <MenuItem key={option} onClick={handleClose}>
              {option}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
