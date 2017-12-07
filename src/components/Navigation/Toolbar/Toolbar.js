import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItmes from '../NavigiationItems/NavigiationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItmes/>
        </nav>
    </header>
)

export default toolbar;