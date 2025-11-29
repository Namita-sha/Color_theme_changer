let colorPicker=document.querySelector("#colorPicker");
let lightbtn=document.querySelector("#lightbtn");
lightbtn.addEventListener("click",function(){
    document.body.style.background="black";
    document.body.style.color="white";
});

let darkbtn=document.querySelector("#darkbtn");
darkbtn.addEventListener("click",function(){
    document.body.style.background="#c8c6bcff";
    document.body.style.color="black";
});

let pearlbtn=document.querySelector("#pearlbtn");
pearlbtn.addEventListener("click",function(){
    document.body.style.background="#4c0013";
    document.body.style.color="c";
});