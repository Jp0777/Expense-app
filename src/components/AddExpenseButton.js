import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { stateContext } from '../routers/AppRouter';
const AddExp = () => {

    const state = useContext(stateContext);
    const expenses = state.expenses.length;
    let amount = 0;
    state.expenses.forEach((expense) => {
        amount += parseFloat(expense.amount);
    })
    return (
        <div className="wrapper">
            <h3>Viewing <strong>{expenses}</strong> expenses of amount <strong>{amount}</strong></h3>
            <h2 id="p"><button id="btn"><NavLink to="/create" activeClassName="is-active" className="nav-link">Add Expense</NavLink></button></h2>
        </div>
    )
}

export default AddExp;
