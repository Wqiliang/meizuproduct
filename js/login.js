$(".spanwarp input").focus(function(){
    $(".inputwarp").css({
           "border-color":"#387aff"
    })
})
$(".spanwarp input").blur(function(){
    $(".inputwarp").css({
           "border-color":"#ddd"
    })
})
 var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
 
 $(".zhuce").on("click",function(){
     
    var user = $(".spanwarp input").val()
   
       
    if(reg.test(user)){
       // alert(localStorage.getItem('user1'))
         var str = localStorage.getItem("user") ? localStorage.getItem("user"):""
        // alert(str);
           var list = JSON.parse(str)?JSON.parse(str):[]
            var hasname = list.some(function(item,index){
                  if(item.name === user){
                        alert("用户名已存在")
                        return item.name === user
                        return false
                  }
            })
           if(!hasname){
                  var item = {
                      "name":user
                  }
                  list.push(item)
           }
        localStorage.setItem("user",JSON.stringify(list))
         return false;
        }
        //   $(".tip").addClass("vsibility")
       
    
     else{$(".tip").removeClass("vsibility")

    }   
    
   
 })

