let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === './images/tela-programador.png') {
        myImage.setAttribute('src', 'images/dino-meme.png');
    } else {
        myImage.setAttribute('src', 'images/tela-programador.png');
    }
}

let myButton = document.querySelector('button');
let myTitulo1 = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Por favor insira seu nome.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myTitulo1.innerHTML = 'Programar é legal, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myTitulo1.innerHTML = 'Programar é legal, ' + storedName;
  
}

myButton.onclick = function () {
    setUserName ();
}