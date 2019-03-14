
  
var str = localStorage.getItem("cart")? localStorage.getItem("cart"):""



var obj = zhuanhuantoobj(str) 

    var str1 = ""
for(var key in obj){
    var showobj = obj[key]
    str1 += `<tr data-id =${key}>
    <td class="cart-col-select">
        <div class="mz-checkbox"></div>
        <img src="https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@120x120.png" />
           
        <span>
            <p>${showobj.name}</p>
            <p>${showobj.desc}</p>
        </span>
    </td>
    <td class="price" >
        <span>${showobj.price}</span>
    </td>
    <td class="cart-col-number">
        <div class="cart-product-number-adder">
            <p class="cart-product-number-max show">

            </p>
            <div class="mz-adder">
                <button class="mz-adder-subtract">

                </button>
                <div class="mz-adder-num">
                    <input type="text" value="${showobj.num}" />
                </div>
                <button class="mz-adder-add">

                </button>

            </div>
        </div>
    </td>
    <td class="cart-col-total">
        <span class="tol">${Number(showobj.num*showobj.price)}</span>
    </td>
    <td class="cart-col-ctrl"></td>
</tr>`
         
 

 }
 $(".cart-product").html(str1)
 

 
function zhuanhuantoobj(str){
    if(!str){
         return {}
    }else{
          return JSON.parse(str)
    }
}

$(function(){

    $(".cart-product .mz-adder-subtract").each(function(){
        $(this).on("click",function(){
        var id = $(this).parents("tr").attr("data-id")
        var str = localStorage.getItem("cart")? localStorage.getItem("cart"):""
        var obj = zhuanhuantoobj(str) 
        obj[id].num --
        if(obj[id].num >0){
            localStorage.setItem("cart",JSON.stringify(obj))
            var str = localStorage.getItem("cart")
            var obj = zhuanhuantoobj(str)
           $(this).next().children().val(obj[id].num)
           $(this).parents(".cart-col-number").next().children().html(obj[id].num*obj[id].price)
           
   
        }


      
          
          
        })   
              
    }) 
    $(".cart-product .mz-adder-add").each(function(){
        $(this).on("click",function(){
        var id = $(this).parents("tr").attr("data-id")
        var str = localStorage.getItem("cart")? localStorage.getItem("cart"):""
        var obj = zhuanhuantoobj(str) 
        obj[id].num ++
        localStorage.setItem("cart",JSON.stringify(obj))
         var str = localStorage.getItem("cart")
         var obj = zhuanhuantoobj(str)
        $(this).prev().children().val(obj[id].num)
        $(this).parents(".cart-col-number").next().children().html(obj[id].num*obj[id].price)



      
          
          
        })   
              
    })   

      
})       
         
     
          
         
             
        
       
     
      
