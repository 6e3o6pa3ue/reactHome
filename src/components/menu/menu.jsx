import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Menu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">Home</Button>
        <Button color="inherit">TV Shows</Button>
        <Button color="inherit">About Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;