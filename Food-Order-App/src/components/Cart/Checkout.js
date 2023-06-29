import React from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submitted')
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city'></input>
            </div>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button >Confirm</button>
        </form>
    );
}

export default Checkout;