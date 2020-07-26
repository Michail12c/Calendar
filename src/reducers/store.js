import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunkMiddleware  from "redux-thunk";
import calendarReducer from "./calendar";
import monthReducer from "./month";

const rootReducers = combineReducers({
  calendarReducer,
  monthReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;