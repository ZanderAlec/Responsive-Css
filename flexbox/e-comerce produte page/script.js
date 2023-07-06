//Menu----------------------------------
const open_menu_bttm = document.querySelector(".hamburguer-menu");
const close_menu_bttm = document.querySelector(".close-bttm--menu");
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

//Full screen image------------------------------------------------------------------
const close_full_bttm = document.querySelector(".close-bttm--full");
const full_display_box = document.querySelector(".full-display-box");
const prod_img = document.querySelector("#full-bttm");

//Carrossel------------------------------------------------------------
let currentIndex = 0;
let currentIndexFull = 0;


document.addEventListener('click', (event)=>{

   const element = event.target;

   console.log(element);

   if(element == open_menu_bttm) openMenu();
   
   if(element == close_menu_bttm) closeMenu();

   if(element == prod_img) openFullDisplay();

   if(element.classList.contains("preview-images")) carrosselBttms(element);

   if(element.classList.contains("slide-button")) carrosselArrows(element);
   
   if(element == close_full_bttm) closeFullDisplay();

   if(element == cart_icon) openCloseCart();
   
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

function openFullDisplay(){
    fosco_menu_bkg.style.display = "block";
    full_display_box.style.display = "block";
}

function closeFullDisplay(){
    fosco_menu_bkg.style.display = "none";
    full_display_box.style.display = "none";
}

function carrosselBttms(element){
    const element_id = element.id;
    let indexImg = 0, indexCar = 0; 

    //Full display------------------------------------------------
    if(element_id == "preview1"){

    }else if(element_id == "preview2"){
        indexImg = 1;

    }else if(element_id == "preview3"){
        indexImg = 2;
        
    }else if(element_id == "preview4"){
        indexImg = 3;
    }

    //Normal display------------------------------------------------
    else if(element_id == "preview5"){
        indexCar = 1; 

    }else if(element_id == "preview6"){
        indexImg = 1;
        indexCar = 1; 

    }else if(element_id == "preview7"){
        indexImg = 2;
        indexCar = 1; 

    }else if(element_id == "preview8"){
        indexImg = 3;
        indexCar = 1; 
    }

    currentIndexFull = indexImg;
    changeImage(indexImg, indexCar);
}

function carrosselArrows(element){
    console.log("entrei");
    const element_id = element.id;
    const numImgs = 4;
    //Pode ser "normal" ou "full"
    let check = "normal";

    if(element_id == "next"){
        
        currentIndex++;

        if(currentIndex == numImgs){
            currentIndex = 0;
        }
    }

    if(element_id == "previous"){
        currentIndex--;

        if(currentIndex < 0){
            currentIndex = numImgs-1;
        }
    }

    if(element_id == "full-next"){
        currentIndexFull++;

        if(currentIndexFull == numImgs){
            currentIndexFull = 0;
        }

        check = "full";
    }

    if(element_id == "full-previous"){
        currentIndexFull--;

        if(currentIndexFull < 0){
            currentIndexFull = numImgs-1;
        }

        check = "full";
    }

    if(check == "normal"){
        changeImage(currentIndex, 1);
    }else{
        changeImage(currentIndexFull, 0);
    }
}

function changeImage(indexImg, indexCarrossel){
    const slide = document.querySelectorAll(".slide-wraper");

    const img1 = '0%';
    const img2 = '-100%';
    const img3 = '-200%';
    const img4 = '-300%';

    if(indexImg == 0){
        slide[indexCarrossel].style.left = img1;
        return;
    }

    if(indexImg == 1){
        slide[indexCarrossel].style.left = img2;
        return;
    }

    if(indexImg == 2){
        slide[indexCarrossel].style.left = img3;
        return;
    }   

    if(indexImg == 3){
        slide[indexCarrossel].style.left = img4;
        return;
    }
}