/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:15:25 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-02-27 14:44:07
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

// [00:29.250]你是不是像我在太阳下低头
// [00:34.060]流着汗水默默辛苦的工作
// [00:42.640]你是不是像我就算受了冷漠
// [00:48.680]也不放弃自己想要的生活
// [00:54.630]你是不是像我整天忙着追求
// [01:00.660]追求一种意想不到的温柔
// [01:03.590]你是不是像我曾经茫然失措
// [01:12.710]一次一次徘徊在十字街头
// [01:18.300]因为我不在乎别人怎么说
// [01:21.390]我从来没有忘记我
// [01:27.690]对自己的承诺对爱的执著
// [01:32.380]我知道我的未来不是梦
// [01:37.690]我认真的过每一分钟
// [01:40.880]我的未来不是梦
// [01:42.560]我的心跟着希望在动
// [01:46.820]我的未来不是梦
// [01:49.870]我认真的过每一分钟
// [01:52.910]我的未来不是梦
// [01:55.510]我的心跟着希望在动
// [02:00.380]跟着希望在动
// [02:07.860]伴奏
// [02:29.410]你是不是像我整天忙着追求
// [02:35.400]追求一种意想不到的温柔
// [02:41.160]你是不是像我曾经茫然失措
// [02:47.040]一次一次徘徊在十字街头
// [02:52.110]因为我不在乎别人怎么说
// [02:58.890]我从来没有忘记我
// [03:01.870]对自己的承诺对爱的执著
// [03:06.930]我知道我的未来不是梦
// [03:10.820]我认真的过每一分钟
// [03:13.910]我的未来不是梦
// [03:16.510]我的心跟着希望在动
// [03:19.880]我的未来不是梦
// [03:22.820]我认真的过每一分钟
// [03:26.430]我的未来不是梦
// [03:29.120]我的心跟着希望在动
// [03:32.360]我知道我的未来不是梦
// [03:35.390]我认真的过每一分钟
// [03:38.430]我的未来不是梦
// [03:41.160]我的心跟着希望在动
// [03:44.760]
// [03:49.770]跟着希望在动
//'[00:00.000] 作曲 : 江潮\n[00:01.000] 作词 : 孟君酱\n[00:03.37]编曲：江潮\n[00:04.75]吉他：蔡剑\n[00:06.34]和声：江潮\n[00:07.81]rap：江潮\n[00:09.11]混音：ET\n[00:10.31]制作人：江潮\n[00:11.50]出品：新乐尘符\n[00:12.70]轻轻贴近你的耳朵\n[00:16.00]莎朗嘿哟\n[00:18.03]情话永远不嫌太多\n[00:20.34]对你说\n[00:24.00]一全听你的\n[00:26.69]二给你好的\n[00:28.90]数到三永远爱你一个\n[00:34.67]四不会犯错\n[00:37.35]五不会啰嗦\n[00:39.64]每天为你打call\n[00:41.35]cook也不错\n[00:44.68]轻轻贴近你的耳朵\n[00:47.98]莎朗嘿哟\n[00:49.98]情话永远不嫌太多\n[00:52.31]对你说\n[00:55.33]打开你的爱情手册\n[00:58.66]就在此刻\n[01:00.68]为你唱的专属情歌\n[01:03.00]要记得\n[01:12.14]\n[01:17.32]说你想说的\n[01:20.00]做你想做的\n[01:22.29]别怕失败因为你有我\n[01:28.01]陪你看日落\n[01:30.65]陪你等雨过\n[01:32.96]陪你一起唱完\n[01:34.66]我们爱的歌\n[01:38.01]轻轻贴近你的耳朵\n[01:41.33]莎朗嘿哟\n[01:43.32]情话永远不嫌太多\n[01:45.63]对你说\n[01:48.64]打开你的爱情手册\n[01:51.94]就在此刻\n[01:53.98]为你唱的专属情歌\n[01:56.30]要记得\n[01:59.71]江潮：\n[02:10.34]我轻轻靠近你的耳朵 说爱你不嫌太多\n'

//格式化歌词
export const formatLrc = (value) => {
    const arr  = value.split("\n");
    const reg = new RegExp(/\[.*\]/,'g');
    let reArr = [];
    arr.forEach(ele =>{
        const time = ele.match(reg)||[];
        if(time[0] && ele.replace(time[0] , '').trim()!= ''){
            const handleTime = time[0].trim().slice(1,-1).split(':');
            reArr.push({
                time : Math.floor(handleTime[0]*60) + Math.floor(handleTime[1]),
                lrc  : ele.replace(time[0] , '').trim()
            })
        }
    })
    return reArr;
}