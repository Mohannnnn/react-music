/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:15:25 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-03-10 20:09:34
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

//节流
export const throttleFn = (callback , delay ,time) => {
    var startTime = new Date();
    var timer = null;
    return function() {
        var context = this;
        var currTime = new Date();
        clearTimeout(timer);
        if(currTime.getTime() - startTime.getTime() > time) {
            callback.call(context);
            startTime = currTime;
        } else {
            timer = setTimeout(callback , delay);
        }
    }
}

//格式化时间
export const formatTime = (value) => {
    const minute = Math.floor(value/60) > 9 ? Math.floor(value/60) : '0' + Math.floor(value/60);
    const second = Math.floor(value%60) > 9 ? Math.floor(value%60) : '0' + Math.floor(value%60);
    return minute + ':' + second;
}

//格式化歌词
export const formatLrc = (value) => {
    const arr  = value.split("\n");
    const reg = new RegExp(/\[[^\]]*\]/,'g');
    let reArr = [];
    let needSort = false;
    arr.forEach(ele =>{
        const times = ele.match(reg)||[];
        if(times.length > 1) needSort = true;  
        times.forEach(time => {
            if(time && ele.replace(times.join('') , '').trim()!= ''){
                const handleTime = time.trim().slice(1,-1).split(':');
                reArr.push({
                    time : Math.floor(handleTime[0]*60) + Math.floor(handleTime[1]),
                    lrc  : ele.replace(times.join('') , '').trim()
                })
            }
        })
    })
    function insertionSort(myArray) {
        let len   = myArray.length,     // 数组的长度
            value,                      // 当前比较的值
            i,                          // 未排序部分的当前位置
            j;                          // 已排序部分的当前位置 
        for (i=0; i < len; i++) {
            value = myArray[i];
            for (j=i-1; j > -1 && myArray[j].time > value.time; j--) {
                myArray[j+1] = myArray[j];
            }
            myArray[j+1] = value;
        }
        return myArray;
    }
    if(needSort) {
        return insertionSort(reArr);
    }else {
        return reArr;
    }
}