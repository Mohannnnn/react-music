/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:16:31 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-02-26 22:57:38
 */
// 封装fetch请求方法
export default async({url = '' , type = 'GET' , data = {} , dataType='json'} = {}) => {
    type = type.toUpperCase();
    if(type == 'GET') {
        let uri = '';
        if(data) {
            Object.keys(data).forEach(key => {
               uri += `${key}=${data[key]}&`; 
            });
            url = `${url}?${uri}`.slice(0 , -1);
        }
    }else if (type == 'POST') {
        data = JSON.stringify(data);
    }
    if(window.fetch) {
        let options = {
            method : type,
            //credentials : 'include', //携带cookie
            mode : 'cors', 
            cache : 'force-cache',
            headers : {
                "Content-type" : "application/json",
                "Accept" : "application/json"
            }
        };
        if(type == 'POST') {
            Object.defineProperty(options , 'body' , {
                value : data
            })
        }
        const response = await fetch(url , options);
        if(dataType == 'json'){
            const responseJSON = await response.json();
            return responseJSON;
        }else if(dataType == 'text'){
            const responseText = await response.text();
            return responseText;
        }
    }else {
       return new Promise((resolve) => {
            const xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
            xhr.open(type , url , true);
            xhr.setRequestHeader('Content-Type' , 'application/x-www-form-urlencoded;charset=UTF-8');
            xhr.send(data);
            xhr.onreadystatechange = function (e) {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) { // 304是不用判断的，因为每次请求会加入一个随机数，不会缓存。
                        let responseJSON = ''
                        if(xhr.response.constructor != Object) {
                            responseJSON = JSON.parse(xhr.responseText)
                        }
                        // console.log(responseJSON)
                        resolve(responseJSON);
                    }
                }
            }
       })
    }
} 