import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerStyleModule from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let stylesClasses = [SideDrawerStyleModule.SideDrawer, SideDrawerStyleModule.Close];
    if (props.showSideDrawer) {
        stylesClasses = [SideDrawerStyleModule.SideDrawer, SideDrawerStyleModule.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.showSideDrawer} clicked={props.sideDrawerClosed}/>
            <div className={stylesClasses.join(' ')}>
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
