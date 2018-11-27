import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import ContactDataStyles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        //alert("You bought the burger!!");
        this.setState({loading:true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Alex Conner',
                address: {
                    street: '123 Abc Street',
                    zipCode: '12345',
                    country: 'Oo'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => {
            console.log('ordered burger: ', response)
            this.setState({loading: false})
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error);
            this.setState({loading: false});
        });

    }


    render ()
    {
        let form = (
            <form>
            <input className={ContactDataStyles.Input} type="text" name="name" placeholder="Name"/>
            <input className={ContactDataStyles.Input} type="text" name="email" placeholder="Email"/>
            <input className={ContactDataStyles.Input} type="text" name="street" placeholder="Street"/>
            <input className={ContactDataStyles.Input} type="text" name="postal" placeholder="Postal Code"/>
            <Button btnType="Danger">Cancel</Button>
            <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }

        return (
            <div className={ContactDataStyles.ContactData}>
            <h4>Enter your contact data: </h4>
            {form}
            </div>
        );

    }
}
export default ContactData;
