/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:15:25 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-17 21:09:52
 */
//设置localStorage值
export const setLocalStorage = (value, key) => {
    let searchList = getLocalStorage(key);
    if(value.constructor == Object){
        delLocalStorage(key);
        window.localStorage.setItem(key, JSON.stringify(value));
    }else {
        if (!searchList) {
            let array = [];
            array.push(value);
            window.localStorage.setItem(key, JSON.stringify(array));
        } else if (JSON.stringify(searchList).indexOf(value.toString()) == -1) {
            if (searchList.constructor == Array) {
                searchList.push(value);
                window.localStorage.setItem(key, JSON.stringify(searchList));
            }
        }
    } 
}

//获取localStorage值
export const getLocalStorage = (value) => {
    if (window.localStorage.getItem(value)) {
      return JSON.parse(window.localStorage.getItem(value));
    } else {
      return '';
    }
}

//清除localStorage某项值
export const delLocalStorage = (value) => {
    if(!!value) window.localStorage.removeItem(value , '');
}

