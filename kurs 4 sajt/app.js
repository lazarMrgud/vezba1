const menu=document.querySelector("#mobile-menu");
const menunavbar=document.querySelector(".navbar-menu");


menu.addEventListener("click", function(){
    menu.classList.toggle("is-active");
    menunavbar.classList.toggle("active");

});