import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Theme from './theme.jsx';

export default function PrimarySearchAppBar({ children }) {
  return (
    <AppBar position="static" sx={{ height: '100%', background: Theme.palette.primary}}>
      <Toolbar
        sx={{
          height: '100%vh',
          width: '100%vw',
          color: '#FFFFFF',
          fontSize: '20px',
          padding: '3%',
          justifyContent: 'space-between'
        }}>
        {children}
      </Toolbar>
    </AppBar>
  );
}