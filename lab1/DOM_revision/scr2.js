let x=document.getElementById("ele1");
x.addEventListener("click",function(){
    x.style.color="yellow";
    x.style.backgroundColor="white";
})

let y=document.getElementById("ele2");
y.addEventListener("mouseenter",function(){
    y.style.color="white";
    y.style.backgroundColor="orange";
})

y.addEventListener("mouseleave",function(){
    y.style.color="black";
    y.style.backgroundColor="gold";
})