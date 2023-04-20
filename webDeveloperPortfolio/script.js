const menuBttm = document.querySelector('#menu-bttm');
const x_icon = document.querySelector('.x-menu');
const burguer_icon = document.querySelector('.hamburguer-menu');
const menu = document.querySelector('ul');

//status do menu:
let open = false; 

menuBttm.addEventListener('click', openCloseMenu);

function openCloseMenu(){
    //Se o menu estiver fechado:
    if(!open){
        burguer_icon.style.visibility = 'hidden';
        x_icon.style.visibility = 'visible';
        menu.style.display = 'flex';

        open = true;
        return; 
    }

    //Se o menu estiver aberto:
    burguer_icon.style.visibility = 'visible';
    x_icon.style.visibility = 'hidden';
    menu.style.display = 'none';
    open = false;
}
