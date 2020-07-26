import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="inner-select">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
         Type calendar
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/month">Month</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/week">
             Week
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
         <NavLink to="/day">
            Day
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}