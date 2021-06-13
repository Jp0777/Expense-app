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
                startDate: action.stdate
            }
        case 'SET_ENDDATE':
            return {
                ...state,
                endDate: action.edate
            }
        case 'CLEAR_DATES':
            return {
                ...state,
                startDate: '',
                endDate: '',
                text: ''
            }
        default:
            return state;
    }
}


export default filterReducer;