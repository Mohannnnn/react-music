/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:15:25 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-27 13:29:19
 */
//获取经纬度
export const getItude =  async () => {
    let reMsg = {
        longitude : 116.286225, //经度
        latitude : 40.032527 ,  //纬度
        status : 0,
        address : '',
        status : 0,
        msg : ''
    }
    if(!window.AMap) require('../plugins/aMap.js');
    return await new Promise(resolve => {
        let map, geolocation;
        //加载地图，调用浏览器定位服务
        // console.log(window.AMap)
        map = new AMap.Map('', {
            resizeEnable: true
        });
        map.plugin('AMap.Geolocation',  async function() {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                buttonOffset: new AMap.Pixel(10, 10),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                buttonPosition:'RB'
            });
            map.addControl(geolocation);
            await geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
            AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
        });
        //解析定位结果
        function onComplete(data) {
            reMsg.longitude = data.position.getLng();
            reMsg.latitude = data.position.getLat();
            reMsg.msg = data.message;
            reMsg.status = 1;
            reMsg.address = data.formattedAddress;
            resolve(reMsg)
        }
        //解析定位错误信息
        function onError(data) {
            reMsg.msg = data.message;
            resolve(reMsg)
        }
    })
}

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

//格式化饿了么接口中的图片地址
export const getElmImageUrl = (value) => {
    const imgHeadUrl = 'https://fuss10.elemecdn.com/';
    return `${imgHeadUrl}${value.substr(0,1)}/${value.substr(1,1)}/${value.substr(2)}.${value.substr(32)}`;
}
