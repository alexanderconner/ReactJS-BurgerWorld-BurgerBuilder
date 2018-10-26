import React from 'react';
import BackdropStyleModule from './Backdrop.module.css';

const backDrop = (props) => {

    return (
        props.show ? <div className={BackdropStyleModule.Backdrop} onClick={props.clicked}></div> : null
    )

};

export default backDrop;
