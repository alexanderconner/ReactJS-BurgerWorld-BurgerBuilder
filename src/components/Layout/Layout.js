import React from 'react';
import Aux from '../../hoc/Auxiliary';
import layoutModules from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <SideDrawer/>
        <main className={layoutModules.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;