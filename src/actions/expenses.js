import { v4 as uuidv4 } from 'uuid';

const addExpense = ({ description, note, amount, createdAt } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}
const editExpense = ({ id, expense } = {}) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        expense
    }
}

export { addExpense, removeExpense, editExpense };