const num_card = document.querySelector('.visual-num-card');
const name_card = document.querySelector('.visual-name-card');
const date_card = document.querySelector('.visual-date-card');
const cvc_card = document.querySelector('.visual-cvc-card');

document.addEventListener('focusin', (event)=>{
    const elem = event.target;
    const id = elem.id;

    if(id == "name") displayName(elem);

    else if(id == "cardNumber") displayNumber(elem);

    else if(id == "month") displayMonth(elem);

    else if(id == "year") displayYear(elem);

    else if(id == "cvc") displayCvc(elem);
    
});

//Verifica se existe número na string
function searchNumber(element){
    const string = element.value;
    
    for(let value of string){
        if(!isNaN(value) && value != " "){
            document.getElementById('only-letter-error').style.display = 'block';
            placeRedBorder(element);
            return;
        }
    }

    document.getElementById('only-letter-error').style.display = 'none';
    placePurpleBorder(element);
}

//Verifica se existe algo além de letras na string
function searchChar(element){
    const value = element.value;

    if(isNaN(+value)){
        placeRedBorder(element);
        return;
    }

    placePurpleBorder(element);
}

//Deixa a borda vermelha(alerta)
function placeRedBorder(element){
    const color = getComputedStyle(document.documentElement).getPropertyValue('--error-red');

    element.style.borderColor = color;
    element.style.outlineColor = color;
}

//Deixa a borda roxa(padrão)
function placePurpleBorder(element){
    const color = getComputedStyle(document.documentElement).getPropertyValue(' --light-purple');

    element.style.borderColor = color;
    element.style.outlineColor = color;
}

//Verifica se o campo está vazio, caso esteja aplica a formatação de aviso.
function isBlank(elem, num){
    const error = document.getElementsByClassName("empty");

    if(elem.value == ''){
        placeRedBorder(elem);
        error[num].style.display = 'block';
        return ;
    } 
    
    error[num].style.display = 'none';
}

//Formata o número digitado para aparecer no cartão.
function applyNumberMask(value){

    let mask;

    for(let indice in value){

        //Adiciona espaço a cada 4 números
        if((indice)%4 == 0)
            mask += ' ';


        if(indice == 0){
            mask = value[indice];
            continue;
        }

        mask += value[indice];

    }

    //deixa o espaço de numero vazio se não tiver nada no campo
    if(mask == undefined) mask = " ";
    
    return mask;
}

//Formata o nome do usuário para caber no cartão.
function applyNameMask(value){

    const stringParts = value.split(" ");
    let mask;

    //formata cada pedaço de nome individualmente
    for(index in stringParts){

        //Se o campo está vazio, o nome fica vazio
        if(index == 0 && stringParts[index] == ""){
            mask = "";
            break;
        }

        //se o primeiro nome for muito grande mostra apenas 20 caracteres
        if(stringParts[index].length >= 20){

            const limitedName = stringParts[index].slice(0,19);
            mask = limitedName;

            break;
        } 

        //Limita a 20 a quantidade de caracteres presentes no cartão
        if(mask != null && mask.length >= 20 ) 
            break;
        
        //primeiro nome mostra inteiro
        if(index == 0) 
            mask = stringParts[index].concat(" ");

        //nome pequeno mostra inteiro
        else if(stringParts[index].length <= 3 || value.length <= 18)
            mask += stringParts[index].concat(" ");
        
        //Sobrenomes são abreviados
        else 
            mask += stringParts[index][0].concat(". ");
        
    }

    return mask;
}

//Formata a hora e a data
function applyDateMask(value, fieldNumber){

    const dateTemplate = '00/00';
    const dateCardValue = date_card.innerHTML;
    let mask, temp;
    let startcut, endcut;

    //Mantém o padrão de 2 dígitos no mes e ano;
    if(value.length < 2){
        temp = "0" + value;

    }else if(value.length == 2){
        temp = value;
    }

    //Aplica o mês na máscara
    if(fieldNumber == 1){

        if(value == ''){
            temp = "00"
        }
            startcut = 2;
            endcut = 5;
        
            mask = dateCardValue.substring(startcut,endcut);
            mask = temp + mask;
    }

    //Aplica o ano na máscara
    if(fieldNumber == 2){

        if(value == ''){
            temp = "00"
        }

        startcut = 0;
        endcut = 3;
        mask = dateCardValue.substring(startcut,endcut);
        mask = mask + temp;
    }
        
    //Reseta a máscara se ambos os campos estiverem vazios
    if(dateCardValue == 'undefined' ){
       mask = dateTemplate;
    }

    return mask;
}

//Mostra o nome no cartão
function displayName(element){
    element.addEventListener("keyup", (event)=>{

        const inputValue = element.value;
        
        searchNumber(element);
        isBlank(element, 0);
        
        name_card.innerHTML = applyNameMask(inputValue);
        
    });
}

//Mostra o número no cartão.
function displayNumber(element){
    element.addEventListener("keyup", (event)=>{

        const value = element.value;

        if(isNaN(+value)){
            document.getElementById('only-number-error').style.display = 'block';
            placeRedBorder(element);

        }else{
            document.getElementById('only-number-error').style.display = 'none';
            placePurpleBorder(element);

        }

        isBlank(element, 1);

        num_card.innerHTML = applyNumberMask(element.value);
    });
}

//Mostra o mês no cartão
function displayMonth(element){
    element.addEventListener("keyup", (event)=>{

        searchChar(element);
        isBlank(element, 2);

        date_card.innerHTML = applyDateMask(element.value, 1);

    });
}

//Mostra o ano no cartão
function displayYear(element){
    element.addEventListener("keyup", (event)=>{

        searchChar(element);
        isBlank(element, 2);

        date_card.innerHTML = applyDateMask(element.value, 2);
    });
}

//Mostra o número de cvc no cartão.
function displayCvc(element){
    element.addEventListener("keyup", (event)=>{
    
        searchChar(element);
        isBlank(element, 3);

        cvc_card.innerHTML = element.value;
    });
}


