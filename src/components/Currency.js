import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }

    return(
        <div className="alert alert-warning">Currency:
            <select name="currency" id="currency" onChange={event=>handleCurrencyChange(event.target.value)}>
                <option value="$">Dollar($)</option>
                <option value="£">Pound(£)</option>
                <option value="₹">Rupee(₹)</option>
                <option value="€">Euro(€)</option>
            </select>
        </div>
    );
}

export default Currency;