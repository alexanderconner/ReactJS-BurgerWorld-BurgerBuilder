import React from 'react';
import NavigationItemStyleModules from './NavigationItem.module.css';

const navigationItem = (props) => {
    return (
            <li className={NavigationItemStyleModules.NavigationItem}>
                <a
                href={props.link}
                className={props.active ? NavigationItemStyleModules.active : null}>
                    {props.children}
                </a>
            </li>
        )
};

export default navigationItem;
