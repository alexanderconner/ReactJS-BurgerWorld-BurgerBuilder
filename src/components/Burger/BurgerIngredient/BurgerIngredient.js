import React, {Component} from 'react';
import PropTypes from 'prop-types';
import burgerIngredientModules from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
            ingredient = <div className={burgerIngredientModules.BreadBottom}> </div>;
            break;
            case ('bread-top'):
            ingredient = (
                <div className={burgerIngredientModules.BreadTop}>
                    <div className={burgerIngredientModules.Seeds1}/>
                    <div className={burgerIngredientModules.Seeds2}/>
                </div>
            );
            break;
            case ('meat'):
            ingredient = <div className={burgerIngredientModules.Meat}></div>;
            break;
            case ('cheese'):
            ingredient = <div className={burgerIngredientModules.Cheese}></div>;
            break;
            case ('salad'):
            ingredient = <div className={burgerIngredientModules.Salad}></div>;
            break;
            case ('bacon'):
            ingredient = <div className={burgerIngredientModules.Bacon}></div>;
            break;
            default:
            ingredient = <div style={"background-color:red"}> </div>
        }
        return ingredient;
    }
}

BurgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
};
export default BurgerIngredient;
