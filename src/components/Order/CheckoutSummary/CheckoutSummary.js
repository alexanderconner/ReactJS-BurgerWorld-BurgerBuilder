import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'
import CheckoutSummaryStyles from './CheckoutSummary.module.css';


const checkoutSummary = (props) => {

    return (
        <div className={CheckoutSummaryStyles.CheckoutSummary}>
            <h1>We hope you enjoy your order! </h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger
                    ingredients={props.ingredients}>
                </Burger>
            </div>
            <Button btnType="Danger"
                clicked>Cancel
            </Button>
            <Button btnType="Success"
                clicked>Submit
            </Button>

        </div>
    );
};

export default checkoutSummary;
