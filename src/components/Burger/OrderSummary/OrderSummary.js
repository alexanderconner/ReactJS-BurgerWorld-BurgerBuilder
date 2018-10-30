import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log("%c[OrderSummary] WillUpdate", "color: blue; font-size:15px;");
    }

    render()  {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
                {this.props.ingredients[igKey]}
                </li>
            );
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                {ingredientSummary}
                </ul>
                <p><strong>Your total is: ${this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button
                btnType="Danger"
                clicked={this.props.purchaseCancelled}>
                Cancel
                </Button>
                <Button
                btnType="Success"
                clicked={this.props.purchaseContinue}>
                Continue
                </Button>
            </Aux>
        )
    }

};

export default OrderSummary;
