const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_SORTBY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_STARTDATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_ENDDATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}


export default filterReducer;