import React from 'react';
import ButtonStyleModules from './Button.module.css';

const button = (props) => {
    return (
        <button
            className={[ButtonStyleModules.Button, ButtonStyleModules[props.btnType]].join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    )
};

export default button;
