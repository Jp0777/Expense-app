const expenseReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return (state.filter((st) => {
                return st.id !== action.id;
            }));

        case 'EDIT_EXPENSE':
            return state.map((st) => {
                if (st.id === action.id)
                    return {
                        ...st,
                        ...action.expense
                    }
                return st;
            })

        default:
            return state;
    }
}

export default expenseReducer;