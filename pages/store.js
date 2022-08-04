import { createStore, combineReducers,applyMiddleware } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { isChat } from './redux/ischat';
import { islogin } from './redux/islogin';
// create your reducer
const reducers = combineReducers({
    isChat,
    islogin
})

const initStore = () =>{
    return createStore(reducers)
}
// create a makeStore function
const makeStore = context => createStore(isChat);

// export an assembled wrapper
export const wrapper = createWrapper(initStore);