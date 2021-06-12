import React from 'react';
import AddExp from './AddExpenseButton';
import ExpenseListFilter from './ExpenseFListilter';
import ExpenseList from './ExpenseList';

const ExpenseDashboardPage = () => {

    return (
        <div>
            <AddExp />
            <ExpenseListFilter />
            <ExpenseList />
        </div>

    )
}
export default ExpenseDashboardPage;