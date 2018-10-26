import React from 'react';
import ToolbarStyleModules from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const toolbar = (props) => {
    return (
        <header className={ToolbarStyleModules.Toolbar}>
            <div>MENU</div>
            <div className={ToolbarStyleModules.Logo}>
            <Logo></Logo>
             </div>
            <nav className={ToolbarStyleModules.DesktopOnly}>
                <NavigationItems/>
            </nav>

        </header>
    )
};

export default toolbar;
