//Menu----------------------------------
const open_menu_bttm = document.querySelector(".hamburguer-menu");
const close_menu_bttm = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");
const fosco_menu_bkg =  document.querySelector(".bkg-dark");
const body = document.querySelector("body");

//Cart-----------------------------------
const cart_icon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
let cart_open = false;
const card_total = document.querySelector("#card-total");


const cart_notify = document.querySelector(".cart-notify");
const notify_number = document.querySelector("#notify-number");


const add_cart_bttm = document.querySelector("#add-bttm");
const trash_bttm = document.querySelector("#clean-cart");
const cart_item = document.querySelector(".cart-item");

//plus buttons------------------------------
let quant_itens = 0;
const elem_quant_itens = document.querySelectorAll(".quant-itens");

const minus_bttm = document.querySelector(".minus-icon");
const plus_bttm = document.querySelector(".plus-icon");


document.addEventListener('click', (event)=>{

   const element = event.target;

   if(element == open_menu_bttm) openMenu();
   
   if(element == close_menu_bttm) closeMenu();

   if(element == cart_icon){
        openCloseCart();
   }

   if(element == minus_bttm){
        decreaseAmount();
        displayAmount();
    }
   
   if(element == plus_bttm){
        increaseAmount();
        displayAmount()
    }
    
    if(element == add_cart_bttm){
        addCart();
        showCartNotify();
        calcTotalPrice();
    }

    if(element == trash_bttm) cleanCart();
    
});

//menu--------------------------------------------
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

function increaseAmount(){
    quant_itens++;
}

function decreaseAmount(){
    if(quant_itens != 0) quant_itens--;
}

function displayAmount(){
    for(let elem of elem_quant_itens){
        elem.innerText = quant_itens;
    }
}

function openCloseCart(){
    if(!cart_open){
        cart.style.display = "block";
        closeCartNotify();
        return cart_open = true;
    }

    cart.style.display = "none";
    return cart_open = false;
}

function showCartNotify(){
    if(!cart_open && quant_itens!=0){
        cart_notify.style.display = "block";
        notify_number.innerText = quant_itens;
    }
}

function closeCartNotify(){
    notify_number.innerText = 0;
    cart_notify.style.display = "none";
}

function calcTotalPrice(){
    card_total.innerText = 125*quant_itens+".00";
}

function addCart(){
    if(quant_itens != 0){
        cart_item.style.display = "block";
    }
}

function cleanCart(){
    cart_item.style.display = "none";
}