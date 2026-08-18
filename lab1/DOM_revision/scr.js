let x=document.querySelector("h2")
x.style.color="red";
x.style.fontFamily="Gill Sans"

let y=document.querySelector("h1")
y.style.backgroundColor="red";
setTimeout(function(){
    y.innerHtml="changed";
},2000)