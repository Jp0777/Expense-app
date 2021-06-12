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


export { setText, setSortByDate, setSortByAmount };