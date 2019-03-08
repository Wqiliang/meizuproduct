  function _style(max){
			  	   var oDm = document.querySelectorAll(max)
			  	   if(oDm.lenght === 0){
			  	   	 return null
			  	   	
			  	   }
			  	   return oDm.length === 1 ? oDm[0] : oDm
			  	
			  }
 function getStyle(dom,attr,type){
                  // 用 新方法取值;
                  var res_attr = getComputedStyle(dom)[attr];
                  // 如果要求转换成数字,那么就转换;
                  if(type === "number"){
                        return parseInt(res_attr);
                  }
                  // 如果不要求就原样返回;
                  return res_attr;
            }
 function animate(dom,attr,target,callback){
                  // if(timer !== null) return false;
                  
                  clearInterval(dom.timer);
                  dom.timer = setInterval(()=>{
                        let distance = target - getStyle(dom,attr,"number");
                        let speed = distance > 0 ? Math.ceil(distance/10) : Math.floor(distance / 10);

                        dom.style[attr] = getStyle(dom,attr,"number") + speed + "px";

                        if(distance === 0){
                              clearInterval(dom.timer);
                              timer = null;
                              if(callback){
                              	callback()
                              }
                        }
                  },50)
            }
  
// 事件委托封装;
function _delegation(parent_node,event_type,target_selector,fn){
      // 1. 绑定不同的事件;
     parent_node.addEventListener(event_type,handlerClick)
     // 2. 事件处理函数;
     function handlerClick(evt){
           // 2.1 判断部分;
           var e = evt || window.event;
           var target = e.target || e.srcElement;
           // 2.1.1 选择范围会改变
           var targets = document.querySelectorAll(target_selector);
           targets = Array.from(targets);
           if(targets.indexOf(target) === -1) return false;
           // 2.2 事件处理函数;
           fn(e);
     }
}

// cookie封装
function _cookie(key,value,path,expires){
      var str = "";
      str += key + "=" + value + ";";
      if(path){
            str += "path=" + path + ";";
      }
      if(typeof expires === "number"){
            var d = new Date();
            d.setDate(d.getDate() + expires);
            str += "expires=" + d + ";";
      }
      document.cookie = str;
      return str;
}
// cookie 删除封装
function _removeCookie(key,path){
_cookie(key,"",path,-1)
}

//根据 key 值 获取cookie之中对应的value值
function _getCookie(key){
      // 1. 目标  根据 key 值 获取cookie之中对应的value值;
      // 2. 有啥 ? 1. cookie字符串 2. key;  3. some ;

      // 1. 获取cookie字符串;
      var cookieString = document.cookie;
      // 2. 把字符串转换成数组;
      var cookieArray = cookieString.split("; ");
      // console.log(cookieArray);
      // 3. 利用some 只要有一个ture就终止的特性; 判定是否存在这个key;
      
      var res = "";
      var hasKey = cookieArray.some(function(item){
            // 4. 判定当前字符串之中是否存在这个key值;
            // console.log(item.split("=")[0]);
            res = item.split("=")[1];
            return item.split("=")[0] === key
      })

      if(hasKey){
            return res;
      }else{
            return "";
      }
}

//ajaxGet(url)
//.then(function(res){
	
//})



// ajax GET传递数据
function ajaxGet(url) {
      return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.send(null);
            xhr.onreadystatechange = function () {
                  if (xhr.readyState === 4 && xhr.status === 200) {
                        resolve(xhr.response);
                  }
            }
      })
}

// ajax POST传递数据  var data ={
	               // username : user_value
	               // password : psw_value      在前后端的交互里data是自己定义的意思 
	                
//} 也要加.then
function ajaxPost(url, data) {
      return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            var data_str = "";
            for (var attr in data) {
                  if (data_str.length !== 0) {
                        data_str += "&";
                  }
                  data_str += attr + "=" + data[attr];
            }
            xhr.send(data_str);

            xhr.onreadystatechange = function () {
                  if (xhr.status === 200 && xhr.readyState === 4) {
                        resolve(xhr.response);
                  }
            }
      })
}

 //jsonp 跨域封装
// jsonp_key => 前端发给后端函数名时使用的字段名;jsonp(http://sadiuqiwuiludijjj.php?callback=)
 //                                                 .then(function(res){
//                                                       console.log(res)
 	
 //})
function jsonp(url, jsonp_key) {
      return new Promise(function (resolve, reject) {

            // 函数名随机处理避免占用命名空间，避免冲突;

            var randomName = "_" + Date.now()
            console.log(randomName);

            window[randomName] = function (res) {
                  // console.log(res);
                  resolve(res);
            }
            // 2. 创建并插入script标签;
            var script = document.createElement("script");

            // 当前url之中是否存在 ? （存在问好表示已经有数据了），我应该用& 去拼接数据，反之则用 ?;
            url = url + (/\?/.test(url) ? "&" : "?") + jsonp_key + "=" + randomName;

            script.src = url;
            // 3. 标签放入页面之中;
            document.body.appendChild(script);
            // 4. 清理垃圾;
            script.onload = function () {
                  this.remove();

                  window[randomName] = null;
                  delete window[randomName];
            }
      })
}

function randomInt(min,max){
      return min + Math.round((max - min) * Math.random()); 
}