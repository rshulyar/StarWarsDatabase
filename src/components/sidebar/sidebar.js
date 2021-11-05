// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
/** Import menu icon for <MenuIcon/> */
import MenuIcon from '@mui/icons-material/Menu';

import classes from './sidebar.module.css';

/** Function from Material-UI. */
export default function Sidebar() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            
        >
            {/** List with items in array. Add link to href. */}
            <List>
                {['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

  return (
    <div>
        {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon className={classes['menuButton']}/>
                </Button>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        ))}
    </div>
  );
}