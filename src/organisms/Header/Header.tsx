import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Search from '../../atoms/Search/Search';

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Cosuno
        </Typography>
        <Search placeholder="Search Company…" />
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
