import React from 'react';
import MenuStyleModules from './Menu.module.css';

const menu = (props) => {
    return (
        <div
        className={MenuStyleModules.DrawerToggle}
        onClick={props.clicked}>
            <div/>
            <div/>
            <div/>

        </div>
    )
};

export default menu;
