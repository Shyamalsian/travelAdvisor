import React from 'react';
import { AppBar, Toolbar, InputBase, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Correct import

import useStyles from './style';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex" alignItems="center"> {/* Wrap the contents in Box */}
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
