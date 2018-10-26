import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import layoutModules from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
            });
    }

    render () {
        return (
            <Aux>
                <Toolbar
                menuClick={this.sideDrawerClosedHandler}></Toolbar>
                <SideDrawer
                    showSideDrawer={this.state.showSideDrawer}
                    sideDrawerClosed={this.sideDrawerClosedHandler}/>
                <main className={layoutModules.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
