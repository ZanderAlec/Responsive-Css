const open_bttm = document.querySelector(".hamburguer-bttm"); 
const close_bttm = document.querySelector(".close-bttm"); 
const menu_bkg = document.querySelector(".menu-bkg"); 
const menu = document.querySelector("menu");
const body = document.querySelector("body");

document.addEventListener('click', (event)=>{

    const element = event.target;


    if(element == open_bttm) open_menu();

    if(element == close_bttm) close_menu(); 

});

function open_menu(){
    open_bttm.style.display = "none";
    close_bttm.style.display = "block";
    menu_bkg.style.display = "block";
    menu.style.display = "block";
    body.style.overflow = "hidden";
    
}

function close_menu(){
    open_bttm.style.display = "block";
    close_bttm.style.display = "none";
    menu_bkg.style.display = "none";
    menu.style.display = "none";
    body.style.overflow = "visible";
}