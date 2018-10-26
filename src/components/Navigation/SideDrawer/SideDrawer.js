import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerStyleModule from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {

    return (
        <Aux>
        <Backdrop show/>
            <div className={SideDrawerStyleModule.SideDrawer}>
            <div className={SideDrawerStyleModule.Logo}>
                <Logo/>
            </div>

                <nav>
                <NavigationItems> </NavigationItems>
                </nav>

            </div>
        </Aux>
    );
};

export default sideDrawer;
