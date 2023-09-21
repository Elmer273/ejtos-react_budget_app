import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }

    return(
        <div>
            <select className="btn btn-success" name="currency" id="currency" onChange={event=>handleCurrencyChange(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
        // <Dropdown>
        //     <Dropdown.Toggle variant="success" id="dropdown-currency" >
        //         Currency
        //     </Dropdown.Toggle>

        //     <Dropdown.Menu onChange={event=>handleCurrencyChange(event.target.value)}>
        //         <Dropdown.Item value="$">$ Dollar</Dropdown.Item>
        //         <Dropdown.Item value="£">£ Pound</Dropdown.Item>
        //         <Dropdown.Item value="€">€ Euro</Dropdown.Item>
        //         <Dropdown.Item value="₹">₹ Rupee</Dropdown.Item>
        //     </Dropdown.Menu>
        // </Dropdown>
        // <div class="btn-group">
        //     <button type="button" id="dropdownMenuLink" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //         <span class="sr-only">{currency}</span>
        //     </button>
        //     <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        //         <a class="dropdown-item" value="$">$ Dollar</a>
        //         <a class="dropdown-item" value="£">£ Pound</a>
        //         <a class="dropdown-item" value="€">€ Euro</a>
        //         <a class="dropdown-item" value="₹">₹ Rupee</a>
        //     </div>
        // </div>
        // <div>
        //     <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //         <span class="sr-only">Toggle Dropdown</span>
        //     </button>
        //     <select classname="alert alert-warning" name="currency" id="currency" onChange={event=>handleCurrencyChange(event.target.value)}>
        //         Currency
        //         <option value="$">$ Dollar</option>
        //         <option value="£">£ Pound</option>\
        //         <option value="€">€ Euro</option>
        //         <option value="₹">₹ Rupee</option>
        //     </select>
        // </div>
    );
}

export default Currency;