import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItmes from '../NavigiationItems/NavigiationItems';

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            <NavigationItmes/>
        </nav>
    </header>
)

export default toolbar;