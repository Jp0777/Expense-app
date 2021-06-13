import React, { useContext } from 'react';
import { stateContext, dispatchContext } from '../routers/AppRouter';
import { setText, setSortByDate, setSortByAmount, setStartDate, setEndDate } from '../actions/filters';


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
            <div><br />
                <input
                    className="stdate"
                    type="date"
                    onChange={(e) => {
                        dispatch(setStartDate(e.target.value))
                    }}
                    value={state.filters.startDate} />&nbsp;
                <input
                    className="edate"
                    type="date"
                    onChange={(e) => {
                        dispatch(setEndDate(e.target.value))
                    }} value={state.filters.endDate} />
            </div>
        </div>
    )
}

export default ExpenseListFilter;