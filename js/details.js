$(window).on("scroll",function(){
    var scrolltop = document.body.scrollTop || document.documentElement.scrollTop
      
    if(scrolltop >= 80){
        $(".nav").addClass("fixed")
    }else{
        $((".nav")).removeClass("fixed")
       
    }
})
   
   function zhuanhuanstrobj(str){
    if(!str){
       return {}
    }else{
        return JSON.parse(str)
    }
}
 var cookiestr = $.cookie("cart")

var cookieobj = zhuanhuanstrobj(cookiestr)
console.log(cookieobj.id.img)

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
               ${cookieobj.id.name}
            </span> 
    </div>
     
</div>
<section>
    <div class="preview">
        <div class="preview-booth">
            <img src='${cookieobj.id.img}'/>
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
           <h1>${cookieobj.id.name}</h1>
           <p class="mod-info">${cookieobj.id.desc}</p>
        </div>
        <div class="titleprice">
              
               <span>${cookieobj.id.price}</span>
        </div>
        <div class="buy">加入购物车</div>`

  )