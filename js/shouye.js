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

 $(".phone").on("mouseover",function(){

        $(".hidewarp").animate({
              height:"500;"
        },500)
       
 })