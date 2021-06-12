import React, { useContext, useState } from 'react';
import { dispatchContext } from '../routers/AppRouter'
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = (props) => {
    const dispatch = useContext(dispatchContext)
    const [visible, setVisible] = useState(undefined);
    return (
        <div className="form">
            <div>
                <Link to={`edit/${props.expense.id}`} className="edit-link"><h3 onMouseEnter={() => { setVisible(true) }} onMouseLeave={() => { setVisible(undefined) }}>{props.expense.description} </h3></Link>
                {visible && <span className="visibility-span">Click To Edit</span>}
                <p>{new Date(props.expense.createdAt).toDateString()}</p>
                <p>{props.expense.note}</p>
            </div>
            <div>
                <p className="amount-tag">₹{props.expense.amount}</p>
                <button className="button-tag" onClick={() => {
                    dispatch(removeExpense({ id: props.expense.id }))
                }}>Remove</button>
            </div>
        </div>
    )
}


export default ExpenseListItem;