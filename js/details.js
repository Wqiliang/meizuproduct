$(window).on("scroll",function(){
    var scrolltop = document.body.scrollTop || document.documentElement.scrollTop
      
    if(scrolltop >= 80){
        $(".nav").addClass("fixed")
    }else{
        $((".nav")).removeClass("fixed")
       
    }
})
$(function(){
    carinit()
})
function carinit(){
    var str = localStorage.getItem("cart")? localStorage.getItem("cart"):""
  var obj = zhuanhuantoobj(str) 
  var num = 0
  for(var key in obj){
    num+= obj[key].num
  
  }
  $(".num").html(num)
  }
  

            // var url = window.location.search;
            // var request = new Object();
            // if(url.indexOf("?")!=-1){ 
            //     var str = url.substr(1);  
            //     var strs = str.split("&");
            //     for(var i=0;i<strs.length;i++){
            //         request[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            //     }
            // }
           
        
        function GetQueryString(name)
        {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return unescape(r[2]); return null;
        }
        var res = JSON.parse(GetQueryString("name"))
        console.log(res)

 
   

  $(".main").html(
    ` <div class="nav">
    <div class="container">
        <ul class="list">
            <li class="item">概述</li>
            <li class="item">图库</li>
            <li class="item">参数</li>
            <li class="item">Flyme 7</li>
            <li class="item">了解 M15</li>
            <li class="item">常见问题</li>
        </ul>
        <span class="name">
              ${res.name}
            </span> 
    </div>
     
</div>
<section>
    <div class="preview">
        <div class="preview-booth">
            <img src='${res.img}'/>
        </div>
        <ul>
           <li><a href=""><img src="https://openfile.meizu.com/group1/M00/04/0E/Cgbj0FrcbryAb5caAAWUqdCX12U297.png120x120.jpg"/></a></li>
           <li><a href=""><img src="https://openfile.meizu.com/group1/M00/04/0D/Cgbj0FrcbrKAJbU0AAfoJEM5ZxM308.png120x120.jpg"/></a></li>
           <li><a href=""><img src="https://openfile.meizu.com/group1/M00/04/1C/Cgbj0VrcbrqABPXBAAJKG9OIEkc923.png120x120.jpg"/></a></li>
           <li><a href=""><img src="https://openfile.meizu.com/group1/M00/04/1C/Cgbj0Vrcbr2AUHVsAA2nA6NadFk413.png680x680.jpg"/></a></li>
        </ul>
    </div>
    <div class="property">
        <div class="property-hd">
           <h1>${res.name}</h1>
           <p class="mod-info">${res.desc}</p>
        </div>
        <div class="titleprice">
              
               <span>${res.price}</span>
        </div>
        <div class="buy">加入购物车</div>`

  )

    var id = res.id
     
     
                     
 $(function(){
       $(".buy").on("click",function(){
         var desc = $(".main").find(".property-hd").children(".mod-info").html()
            
         var name = $(".main").find(".property-hd").children("h1").html()
        
         var price = $(".main").find(".titleprice").children("span").html()
         
         var str = localStorage.getItem("cart")? localStorage.getItem("cart"):"";
          var obj = zhuanhuantoobj(str)
          if(id in obj){

            obj[id].num ++

        }else{
               obj[id]={
                 
                     "name":name,
                     "desc":desc,
                     "price":price,
                      "num" : 1
               }
            }
           
        console.log(obj)
                  
        localStorage.setItem("cart",JSON.stringify(obj))
         var num = Number($(".num").html())        
         $(".num").html(num + 1)    
          
        })
      
 })

 

 

 function zhuanhuantoobj(str){
     if(!str){
          return {}
     }else{
           return JSON.parse(str)
     }
 }

        