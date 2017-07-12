import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducersReddit';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const historyMiddleware = routerMiddleware(history);

const loggerMiddleware = createLogger();

/*
* 原写法如下，createStore方法可以包含三个参数，第一个是reducers，第二个是初始化的state，是一个数组，第三个参数是一个高级函数，可以看成函
* 数的组合。想使用redux devtools的话需要使用compose方法将中间件和环境设置组合在一起，作为createStore的第三个参数*/

 // const createStoreWithMiddleware = applyMiddleware(
 // thunkMiddleware,
 // loggerMiddleware
 // )(createStore)
 //
 // export default function configureStore(initialState) {
 // return createStoreWithMiddleware(rootReducer, initialState)
 // }


/*第二种写法是把createStore方法单独拿出来些，并且最后返回该方法。新的写法意思是传递过来的参数先在中间件中走一遍，并且和redux配置组合成高级
* 函数，然后作为第三个参数传入createStore方法中*/

// const createStoreWithMiddleware = compose(applyMiddleware(
//     thunkMiddleware,
//     loggerMiddleware
// ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//
// export default function configureStore(initialState) {
//     return createStore(rootReducer, initialState, createStoreWithMiddleware)
// }

// 判断是否有redux devtools 如果有则compose，没有则不
const createStoreWithMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? compose(applyMiddleware(
    thunkMiddleware,
    // loggerMiddleware,
    historyMiddleware
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore) :
    applyMiddleware(
        thunkMiddleware,
        // loggerMiddleware,
        historyMiddleware
    )(createStore)

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
    // 这种写法的错误在于rootReducer是已经经过combineReducers加强的reducer，此时在组合router: routerReducer会出现错误
    // return createStoreWithMiddleware(combineReducers({...rootReducer, router: routerReducer}), initialState)
}