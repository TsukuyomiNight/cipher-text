let textPlace = document.querySelector('.text-place');
let start = document.querySelector('.start');
let result = document.querySelector('.result');
let textPlaceKnow = document.querySelector('.text-place-know');
let startKnow = document.querySelector('.start-know');
let resultKnow = document.querySelector('.result-know');
let algoDo;
let select;
let option;
let selectKnow;
let optionKnow;
var time;
var minutes;
var seconds;
var hours;
let randomNumfirst = 0;
let randomNumSec = 0;
let day = 0;
let month = 0;

select = document.querySelector('#algorithm');
option = select.options[select.selectedIndex];


selectKnow = document.querySelector('#algorithm-know');
optionKnow = selectKnow.options[selectKnow.selectedIndex];

function update(){
    select = document.querySelector('#algorithm');
    option = select.options[select.selectedIndex];
}
function updateAlt(){
    selectKnow = document.querySelector('#algorithm-know');
    optionKnow = selectKnow.options[selectKnow.selectedIndex];
}
function reverseString(str,result) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    result.textContent = newString;
} 

function changeFirst(symb,result){
    let SymbNew = "";
    for (let i = 0; i < symb.length; i++) {
        if(i %2!= 0){
            SymbNew += String.fromCharCode(symb.charCodeAt(i) + 27)
        }
        else if(i %2=== 0){
            SymbNew += String.fromCharCode(symb.charCodeAt(i) - 107)
        }
    }
    result.textContent = SymbNew;
}
function changeFirstAlt(symb,result){
    let SymbNew = "";
    for (let i = 0; i < symb.length; i++) {
        if(i %2!= 0){
            SymbNew += String.fromCharCode(symb.charCodeAt(i) - 27)
        }
        else if(i %2=== 0){
            SymbNew += String.fromCharCode(symb.charCodeAt(i) + 107)
        }
    }
    result.textContent = SymbNew;
}




function changeSecond(symb,result){
    let SymbNew = "";
    for (let i = symb.length - 1; i >= 0; i--) {
        if(i %2!= 0){
            if(symb.length %2=== 0){
                SymbNew += String.fromCharCode(symb.charCodeAt(i) + 25)
            }
            else{
                SymbNew += String.fromCharCode(symb.charCodeAt(i) - 30)
            }
        }
        else if(i %2=== 0){
            if(symb.length %2!= 0){
                SymbNew += String.fromCharCode(symb.charCodeAt(i) - 30)
            }
            else{
                SymbNew += String.fromCharCode(symb.charCodeAt(i) + 25)
            }
        }
    }
    result.textContent = SymbNew;
}

function changeSecondAlt(symb,result){
    let SymbNew = "";
    for (let i = symb.length - 1; i >= 0; i--) {
        if(i %2!= 0){
            if(symb.length %2=== 0){
                SymbNew += String.fromCharCode(symb.charCodeAt(i) - 25)
            }
            else{
                SymbNew += String.fromCharCode(symb.charCodeAt(i) + 30)
            }
        }
        else if(i %2=== 0){
            if(symb.length %2!= 0){
                SymbNew += String.fromCharCode(symb.charCodeAt(i) + 30)
            }
            else{
                SymbNew += String.fromCharCode(symb.charCodeAt(i) - 25)
            }
        }
    }
    result.textContent = SymbNew;
}


function hiding(symb,result) {
    setInterval(() => {
        time = new Date();
        hours = time.getUTCHours();
        day = time.getDate();
        month = time.getMonth() + 1;
        randomNumfirst = hours - day + hours + month + 56 - 31;
        randomNumSec = hours * hours + day + month;
        if(randomNumSec == 0 || randomNumSec == 1){
            randomNumSec = 2;
        }
        else if(randomNumfirst == 0 || randomNumfirst == 1){
            randomNumfirst = 2;
        }
        let SymbNew = "";
        for (let i = symb.length - 1; i >= 0; i--) {
            if(i %2!= 0){
                if(symb.length %2=== 0){
                    SymbNew += String.fromCharCode(symb.charCodeAt(i) + randomNumfirst)
                }
                else{
                    SymbNew += String.fromCharCode(symb.charCodeAt(i) - randomNumSec)
                }
            }
            else if(i %2=== 0){
                if(symb.length %2!= 0){
                    SymbNew += String.fromCharCode(symb.charCodeAt(i) - randomNumSec)
                }
                else{
                    SymbNew += String.fromCharCode(symb.charCodeAt(i) + randomNumfirst)
                }
            }
        }
            result.textContent = SymbNew;
    }, 1000);
}

function hidingAlt(symb,result) {
    setInterval(() => {
        time = new Date();
        hours = time.getUTCHours();
        randomNumfirst = hours - day + hours + month + 56 - 31;
        randomNumSec = hours * hours + day + month;
        if(randomNumSec == 0 || randomNumSec == 1){
            randomNumSec = 2;
        }
        else if(randomNumfirst == 0 || randomNumfirst == 1){
            randomNumfirst = 2;
        }
        let SymbNew = "";
        for (let i = symb.length - 1; i >= 0; i--) {
            if(i %2!= 0){
                if(symb.length %2=== 0){
                    SymbNew += String.fromCharCode(symb.charCodeAt(i) - randomNumfirst)
                }
                else{
                    SymbNew += String.fromCharCode(symb.charCodeAt(i) + randomNumSec)
                }
            }
            else if(i %2=== 0){
                if(symb.length %2!= 0){
                    SymbNew += String.fromCharCode(symb.charCodeAt(i) + randomNumSec)
                }
                else{
                    SymbNew += String.fromCharCode(symb.charCodeAt(i) - randomNumfirst)
                }
            }
        }
            result.textContent = SymbNew;
    }, 1000);
}


start.addEventListener('click',function(){
    if(option.value == 'change'){
        alert('You didnt choose the option');
    }
    else if(option.value == 'reverse'){
        reverseString(`${textPlace.value}`,result)
    }
    else if(option.value == 'change-first'){
        changeFirst(`${textPlace.value}`,result);
    }
    else if(option.value == 'change-second'){
        changeSecond(`${textPlace.value}`,result);
    }
    else if(option.value == 'change-third'){
        hiding(`${textPlace.value}`,result);
    }
})
startKnow.addEventListener('click',function(){
    if(optionKnow.value == 'change'){
        alert('You didnt choose the option');
    }
    else if(optionKnow.value == 'reverse-know'){
        reverseString(`${textPlaceKnow.value}`,resultKnow)
    }
    else if(optionKnow.value == 'change-know-first'){
        changeFirstAlt(`${textPlaceKnow.value}`,resultKnow)
    }
    else if(optionKnow.value == 'change-know-second'){
        changeSecondAlt(`${textPlaceKnow.value}`,resultKnow);
    }
    else if(optionKnow.value == 'change-know-third'){
        hidingAlt(`${textPlaceKnow.value}`,resultKnow);
    }
})

