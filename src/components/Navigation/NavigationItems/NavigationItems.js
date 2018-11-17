import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import NavigationItemsStyleModules from './NavigationItems.module.css';


const navigationItems = (props) => {
    return (
        <ul className={NavigationItemsStyleModules.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/checkout'>Checkout</NavigationItem>
        </ul>

    );
};

export default navigationItems;
