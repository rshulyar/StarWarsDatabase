import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Sidebar from './../sidebar';

import classes from './header.module.css';

/** Function from Material-UI. */
export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense" className={classes['background']}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Sidebar />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Part name
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}