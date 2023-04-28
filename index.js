const menuToggle=document.querySelector(".menu-toggle");
const container=document.querySelector(".container");
const list=document.querySelectorAll(".list");

menuToggle.onclick=function(){
    container.classList.toggle("open")
}

function activarIcon(){
    list.forEach((item)=>item.classList.remove('active'))
    this.classList.add('active')
    }

list.forEach((item)=>item.addEventListener('click', activarIcon));