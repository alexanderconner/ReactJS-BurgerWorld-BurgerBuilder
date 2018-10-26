import React from 'react';
import LogoStyleModule from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => {
    return (
        <div className={LogoStyleModule.Logo} style={{height:props.height}}>
            <img src={burgerLogo} alt="MyBurger"/>
        </div>

    )
};

export default logo;
