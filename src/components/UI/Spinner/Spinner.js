import React from 'react';
import SpinnerStyleModule from './Spinner.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const spinner = (props) => {
    return (
        <Aux>
        <div className={SpinnerStyleModule.Loader}></div>
        <p style={{textAlign: 'center'}}>Submitting your order...</p>
        </Aux>
    )
};

export default spinner;
