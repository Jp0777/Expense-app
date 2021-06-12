import React, { useState } from 'react';

const ExpenseForm = (props) => {
    let desc = '', amt = '', note = '', ct = '';
    if (props.expense) {
        desc = props.expense.description
        amt = props.expense.amount
        note = props.expense.note
        ct = props.expense.createdAt;

    }
    const [state, setState] = useState({
        description: desc,
        amount: amt,
        note: note,
        date: ct
    })

    const [err, setErr] = useState(undefined);

    let buttonName = desc ? 'Edit Expense' : 'Add Expense';

    const onDescChange = (e) => {
        const desc = e.target.value;
        setState(
            {
                ...state, description: desc
            }
        )
    }
    const onNoteChange = (e) => {
        const note = e.target.value;
        setState(
            {
                ...state, note
            }
        )
    }
    const onAmtChange = (e) => {
        const amt = e.target.value;
        if (!amt || amt.match(/^\d{1,}(\.\d{0,2})?$/))
            setState(
                {
                    ...state, amount: amt
                }
            )
    }

    const onDateChange = (e) => {
        const date = e.target.value;

        setState({
            ...state,
            date
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!state.date || !state.amount || !state.description)
            setErr("Please Fill Out All the required fields")
        else {
            setErr(undefined);
            props.callback({
                description: state.description,
                note: state.note,
                amount: state.amount,
                createdAt: state.date,
            })


        }
    }
    return (
        <div >
            {err && <h3 className="err">{err}</h3>}
            <form onSubmit={onSubmit} className="add-exp-form">
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="desc"
                    value={state.description}
                    onChange={onDescChange}
                /><br />
                <input
                    type="text"
                    placeholder="Amount"
                    className="amt"
                    value={state.amount}
                    onChange={onAmtChange}

                /><br />

                <input
                    type="date"
                    className="date"
                    placeholder="Select A Date"
                    value={state.date}
                    onChange={onDateChange}
                /><br />
                <textarea
                    placeholder="Add A Note For Your Expense(Optional)"
                    className="note"
                    value={state.note}
                    onChange={onNoteChange}>
                </textarea><br />
                <button className="add-exp-button">{buttonName}</button>
            </form>
        </div>
    );
}


export default ExpenseForm;