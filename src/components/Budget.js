import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch, totalExpenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const submitEvent = (val) => {
        if (newBudget > 20000) {
            alert("Value cannot exceed 20000");
            setNewBudget(budget)
            return;
        }

        if (newBudget < totalExpenses) {
            alert("Value cannot be less than the spending total");
            setNewBudget(budget);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: val
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}</span>
            <input type="number" onChange={handleBudgetChange} step="10" min={totalExpenses} max="20000" value={newBudget}></input>
            <button className="btn btn-primary" onClick={event=>submitEvent(event.target.value)} style={{ marginLeft: '2rem' }}>
                Set
            </button>
        </div>
    );
};
export default Budget;
