const setText = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

const setSortByDate = () => {
    return {
        type: 'SET_SORTBY_DATE'
    }
}

const setSortByAmount = () => {
    return {
        type: 'SET_SORTBY_AMOUNT'
    }
}

const setStartDate = (stdate) => {
    return {
        type: 'SET_STARTDATE',
        stdate
    }
}
const setEndDate = (edate) => {
    return {
        type: 'SET_ENDDATE',
        edate
    }
}


export { setText, setSortByDate, setSortByAmount, setStartDate, setEndDate };