import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { dispatchContext } from '../routers/AppRouter';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = () => {

    const dispatch = useContext(dispatchContext);
    let history = useHistory();
    return (
        <div>
            <h1 className="add-exp-title">Add Expense</h1>

            <ExpenseForm callback={(expense) => {
                dispatch(addExpense(expense));
                history.push('/');
            }} />
        </div>
    )
}

export default AddExpensePage;