const open_menu_bttm = document.querySelector(".hamburguer-menu");
const close_menu_bttm = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");
const fosco_menu_bkg =  document.querySelector(".bkg-dark");
const body = document.querySelector("body");

document.addEventListener('click', (event)=>{

   const element = event.target;

   if(element == open_menu_bttm){
        openMenu();
   }

   if(element == close_menu_bttm){
        closeMenu();
   }

});

function openMenu(){
    fosco_menu_bkg.style.display = "block";
    menu.style.display = "block";

    //Impede o rolamente da página quando o menu está aberto.
    body.classList.add("no-scroll"); 
}

function closeMenu(){
    fosco_menu_bkg.style.display = "none";
    menu.style.display = "none";
    body.classList.remove("no-scroll"); 
}