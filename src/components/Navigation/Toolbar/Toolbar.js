import React from 'react';
import ToolbarStyleModules from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Menu from '../../Menu/Menu';

const toolbar = (props) => {
    return (
        <header className={ToolbarStyleModules.Toolbar}>
            <Menu clicked={props.menuClick}/>
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
