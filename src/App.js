import React from 'react';
import { Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'; // Corrected import for CssBaseline
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List'
const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
