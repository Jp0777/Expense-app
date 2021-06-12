import React, { useContext } from 'react';
import { stateContext, dispatchContext } from '../routers/AppRouter';
import { setText, setSortByDate, setSortByAmount } from '../actions/filters';


const ExpenseListFilter = () => {
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext)
    return (
        <div className="form-wrapper">
            <input
                className="text"
                type="text"
                placeholder="Search Expenses"
                value={state.filters.text}
                onChange={(e) => {
                    dispatch(setText(e.target.value));
                }} />
            &nbsp;&nbsp;
            <select className="opt"
                value={state.filters.sortBy}
                onChange={(e) => {
                    if (e.target.value === 'date')
                        dispatch(setSortByDate());
                    else if (e.target.value === 'amount')
                        dispatch(setSortByAmount());

                }}>
                <option value="amount" >Amount</option>
                <option value="date">Date</option>
            </select>
        </div>
    )
}

export default ExpenseListFilter;