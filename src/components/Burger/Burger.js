import React from 'react';
import burgerModules from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import {withRouter} from 'react-router-dom';

const burger = (props) => {

    console.log(props);
    //Transform object into an array of a string and key, and for each quantity return
    //an ingredient element
    //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
    //The map() method creates a new array with the results of calling a provided function on every element in the calling array.

    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey} />;
             });
        })
        //flatten the array to make sure we pull out the values of these inner arrays and trade one array Only
        //reduce will transform an array into something else. takes in a previous value and current value.

        //The reduce() method executes a reducer function (that you provide)
        //on each member of the array resulting in a single output value.
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Time to add ingredients! </p>
    }

    console.log('%c Ingredient keys: ', 'color:orange;');
    console.log(transformedIngredients);

    return (
        <div className={burgerModules.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);
