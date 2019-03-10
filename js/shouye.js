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
 
  // $(".phone").on("mouseover",function(){
  //     $(".meizu-header").addClass("toggle")
  //      $(".meizu-header-wrap-1240 ul li").css({
  //         color:"#515151"
          
  //      })
  //      $(".iconfont").css({
  //           color:"#515151"
  //      })
     
  // })

//  $(".phone").on("mouseover",function(){

//         $(".hidewarp").animate({
//               height:"500;"
//         },500)
       
//  })
 $(".boxwarp ul li").each(function(){
     $(this).on("click",function(){
      var id = $(this).attr("data-id")
      var img = $(this).find("img").attr("data-img")
      var price = $(this).find(".goods-price").children("i").html()
      var desc = $(this).find(".goods-desc").html()
      var name = $(this).find(".goods-name").html()
            
        var cookiestr = $.cookie("cart")? $.cookie("cart"):""
        var cookieobj =  zhuanhuanstrobj(cookiestr)
            cookieobj = {
                    id :{
                           "name":name,
                           "price":price,
                           "desc":desc,
                            "name":name,
                            "img":img
                            
                    }
            }
            $.cookie("cart",JSON.stringify(cookieobj),{
              expires:7,path:"/"
            })
     })
     
 })
 function zhuanhuanstrobj(str){
     if(!str){
        return {}
     }else{
         return JSON.parse(str)
     }
 }