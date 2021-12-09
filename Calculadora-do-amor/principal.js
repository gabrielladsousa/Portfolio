"use strict";

let botao = document.getElementById("liveToastBtn");

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function(toastEl) {
   return new bootstrap.Toast(toastEl)
});

botao.onclick = function() {

    let toastBody = document.querySelector(".toast-body");
  
    if($("#nome").val() == ""){
        toastBody.innerHTML = `
    <div id="flash">Por favor, digite seu nome</div>`
    }
    else if(!isNaN($("#nome").val())){
        toastBody.innerHTML = `
    <div id="flash">Números não são aceitos</div>`
    }
    else if($("#nomeCrush").val() == ""){
        toastBody.innerHTML = `
    <div id="flash">Por favor, digite o nome do(a) crush</div>`
    }
    else if(!isNaN($("#nomeCrush").val())){
        toastBody.innerHTML = `
    <div id="flash">Números não são aceitos</div>`
    }
    else if($("#suaDataNasc").val() == ""){
        toastBody.innerHTML = `
        <div id="flash">Digite a data do seu nascimento</div>`
    }
    else if($("#crushDataNasc").val() == ""){
        toastBody.innerHTML = `
        <div id="flash">Digite a data de nascimento do(a) crush</div>`
    }
    else{

        porcentagem();   
        toastBody.innerHTML = `
        <div id="canvas">Uau!! Eai, gostou do resultado?</div>`      
    }

    toastList[0].show();

}

function porcentagem(){

    let porc = Math.random() * 100;
    porc = Math.floor(porc);
    
    let suaData = document.getElementById("suaDataNasc").valueAsDate;
    let dataCrush = document.getElementById("crushDataNasc").valueAsDate;    
    
    if(suaData.getDate() < 10 && dataCrush.getDate() < 20 && porc <= 95){
    
        document.getElementById('porcentagem').value = porc + 5 + "%"; 
    }
    else{

    document.getElementById('porcentagem').value = porc + "%"; 
        
    } 

}


