/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2019-01-31 17:30:14 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-31 22:14:57
 * @param   {
                type:"get"/"post",
                dataType:"json"/"jsonp",
                url:"地址"，
                data:{key:value}
                success:function(){}
            }
 */
export default (obj) => {
    var type = obj.type || "get";
    var dataType = obj.dataType || "json";
    var url = obj.url;
    var data = obj.data ||{};
    var success = obj.success;
    //把data拼接成字符串,dataStr就是参数字符串
    var dataStr = "";
    //key=key&com=com&on=flsjfsjdfdsf
    for(var key in data){
        dataStr+=key+"="+data[key]+"&"
    }
    dataStr = dataStr.slice(0,-1);
    if(dataType=="json"){
        var xhr = new XMLHttpRequest();
        if(type=="get"){
            xhr.open("get",url+"?"+dataStr);
            xhr.send(null);
        }else if(type=="post"){
            xhr.open("post",url);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(dataStr)
        }
        xhr.onreadystatechange=function(){
            if(xhr.status==200&&xhr.readyState==4){
                var json = xhr.responseText;
                json = JSON.parse(json);
                success(json);
            }
        }
    }else if(dataType=="jsonp"){
        //需要有一个函数名，这个函数名要保证不会重名
        var date = new Date();
        var cbname = "myJsonp"+date.getTime()+Math.random().toString().slice(2);
        //新建一个script标签，里面的src链接到的就是接口地址（包含参数）；
        var newScript = document.createElement("script");
        //我们要把你传入success对应的函数，放在一个特定函数里面
        window[cbname]=function(data){
            success(data);
            // newScript.parentNode.removeChild(newScript);
        };
        if(dataStr==""){
            newScript.src = url+"&callback="+cbname;
        }else{
            newScript.src = url+"?"+dataStr+"&callback="+cbname;
        }
        document.body.appendChild(newScript);
    }
}