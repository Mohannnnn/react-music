/*
 * @Author: wuhan  [https://github.com/Mohannnnn]
 * @Date: 2018-12-27 16:56:59
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-12-27 19:16:41
 * des: 这里是store的入口文件
 */
import { createStore , applyMiddleware , compose } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;