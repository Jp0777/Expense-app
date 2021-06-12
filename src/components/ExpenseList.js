import React, { useContext } from 'react';
import { stateContext } from '../routers/AppRouter';
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = () => {

    const state = useContext(stateContext)
    const expenses = state.expenses.filter((exp) => exp.description.toLowerCase().includes(state.filters.text.toLowerCase()))
    return (
        <>
            <div className="wrapper-for-expenselist">
                <p>Expense</p>
                <p>Amount</p>
            </div>
            {!expenses.length && <h3 className="zero-expense">No Expenses Found</h3>}
            {expenses.map((exp) => {
                return <ExpenseListItem key={exp.id} expense={exp} />
            }).sort((a, b) => {
                if (state.filters.sortBy === 'date')
                    return a.props.expense.createdAt > b.props.expense.createdAt ? 1 : -1
                return a.props.expense.amount > b.props.expense.amount ? 1 : -1
            })}
        </>
    )
}


export default ExpenseList;