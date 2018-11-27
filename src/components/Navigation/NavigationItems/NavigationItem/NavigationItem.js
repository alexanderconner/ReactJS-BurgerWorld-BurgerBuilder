import React from 'react';
import NavigationItemStyleModules from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => {
    return (
            <li className={NavigationItemStyleModules.NavigationItem}>
                <NavLink
                to={props.link}
                exact
                activeClassName={NavigationItemStyleModules.active}>
                    {props.children}
                </NavLink>
            </li>
        )
};

export default navigationItem;
