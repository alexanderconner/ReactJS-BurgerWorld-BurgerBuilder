import React from 'react';
import NavigationItemStyleModules from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => {
    return (
            <li className={NavigationItemStyleModules.NavigationItem}>
                <NavLink
                to={props.link}
                className={props.active ? NavigationItemStyleModules.active : null}>
                    {props.children}
                </NavLink>
            </li>
        )
};

export default navigationItem;
