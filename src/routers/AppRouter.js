import React, { useReducer, useEffect } from 'react';
import combineReducers from 'react-combine-reducers';
import expenseReducer from '../reducers/expense-reducer';
import filterReducer from '../reducers/filter-reducer';
import ExpenseDashboardPage from '../components/DashboardPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExensePage';
import ErrorPage from '../components/ErrorPage';
import Header from '../components/Header';

const stateContext = React.createContext();
const dispatchContext = React.createContext();
const AppRouter = () => {

    const [rootReducer, initialstate] = combineReducers({
        expenses: [expenseReducer, (JSON.parse(localStorage.getItem('state')) || [])],
        filters: [filterReducer, {
            text: '',
            sortBy: 'date',
            startDate: '',
            endDate: undefined,
        }]
    })
    const [state, dispatch] = useReducer(rootReducer, initialstate);

    useEffect(() => {

        localStorage.setItem('state', JSON.stringify(state.expenses))
    }, [state]);

    return (
        <stateContext.Provider value={state}>
            <dispatchContext.Provider value={dispatch}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" component={ExpenseDashboardPage} exact={true} />
                        <Route path="/create" component={AddExpensePage} />
                        <Route path="/edit/:id" component={EditExpensePage} />
                        <Route component={ErrorPage} />
                    </Switch>
                </BrowserRouter >
            </dispatchContext.Provider>
        </stateContext.Provider>
    )
}

export default AppRouter;
export { stateContext, dispatchContext }










