import {combineReducers,createStore,compose,applyMiddleware} from 'redux';
import {reducer as Jobreducer} from '../features/jobs/reducer';
import thunk from 'redux-thunk';

const rootreducer=combineReducers({
    jobState:Jobreducer
})

export const store =createStore(
    rootreducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__())
)