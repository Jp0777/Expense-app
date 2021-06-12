import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { editExpense } from '../actions/expenses';
import { dispatchContext, stateContext } from '../routers/AppRouter';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = () => {
    const params = useParams();
    const history = useHistory();
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);
    const expense = state.expenses.find((exp) => exp.id === params.id);
    return (
        <div>
            <h1 className="edit-exp">Edit Expense</h1>
            <ExpenseForm
                expense={expense}
                callback={(exp) => {
                    dispatch(editExpense({ id: `${params.id}`, expense: exp }))
                    history.push('/');
                }} />
        </div>
    )
}

export default EditExpensePage;