 window.onload = function(){
    var myswiper = new Swiper(".swiper-container",{
        pagination: {
            el: '.swiper-pagination',
            bulletElement : 'span',
            clickable :true,
            
          },
          autoplay:true,
          loop:true,
          scrollbar: {
            el: '.swiper-scrollbar',
          },

     })
 }


   $(".phone").on("mouseover",function(){
       $(".meizu-header").addClass("toggle")
       $(".meizu-header-wrap-1240 ul li").css({
          color:"#515151"
          
        })
      $(".iconfont").css({
             color:"#515151"
        })
     
  })

//  $(".phone").on("mouseover",function(){

//         $(".hidewarp").animate({
//               height:"500;"
//         },500)
       
//  })
$(function(){
  carinit()
 })
 function zhuanhuantoobj(str){
  if(!str){
       return {}
  }else{
        return JSON.parse(str)
  }
}

function carinit(){
  var str = localStorage.getItem("cart")? localStorage.getItem("cart"):""
var obj = zhuanhuantoobj(str) 
var num = 0
for(var key in obj){
  num+= obj[key].num

}
$(".num").html(num)
}

 $(".boxwarp ul li").each(function(){
     $(this).on("click",function(){
      var id = $(this).attr("data-id")
      var img = $(this).find("img").attr("data-img")
      var price = $(this).find(".goods-price").children("i").html()
      var desc = $(this).find(".goods-desc").html()
      var name = $(this).find(".goods-name").html()
      obj = {      "id":id,
                  "name":name,
                  "price":price,
                 "desc":desc,
                    "name":name,
                    "img":img
            } 
          var str = JSON.stringify(obj)
        var url ="details.html?name="+escape(str) 
       
        location.href= url    
      
    
     })

     
 })

