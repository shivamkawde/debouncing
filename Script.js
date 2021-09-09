
function data()
{
        
fetch("data.json").then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
})

}


document.querySelector("input").addEventListener("keyup",function(){
 
  a()
      
})

let a=   callNewfun(data,3000);

function callNewfun(data,d)

{
    let timer
    //console.log("timer"+ timer)
    return function(){
      
    clearTimeout(timer)
    console.log(timer+"zone")
    timer =setTimeout(()=>{
         data()
     },d)
     console.log(timer)

    }

}

// ----------------------------------------------------------------------
//throtling





document.querySelector(".input2").addEventListener("keyup",function(){

 a2()


})



let a2=throtling(data,3000)


function throtling(data,d){
  let flag=true;

    return function(){
           if(flag)
           {
               data()
               flag=false
           
           timer=setTimeout(()=>{
               flag=true;
           },d)
        }

    }

}









