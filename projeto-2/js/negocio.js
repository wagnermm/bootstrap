function validaNome(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        if(this.value == "") {
            document.querySelector('.telaMensagem').innerHTML = "Por favor, preencha os campos corretamente";
        } else {
            document.querySelector('.telaMensagem').innerHTML = "";
        }
    });
}
let camposNome = document.querySelectorAll('input#obrigatorio-1');
for( let emFoco of camposNome) {
    validaNome(emFoco);
}


function validaTelefone(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        if(this.value == "") {
            document.querySelector('.telaMensagem').innerHTML = "Por favor, preencha os campos corretamente";
        } else {
            document.querySelector('.telaMensagem').innerHTML = "";
        }
    });
}
let camposTelefone = document.querySelectorAll('input#obrigatorio-2');
for(let emFoco of camposTelefone) {
    validaTelefone(emFoco);
}


function validaEmail(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.telaMensagem').innerHTML = "";
        } else {
            document.querySelector('.telaMensagem').innerHTML = "Por favor, preencha os campos corretamente";
        }
    });
}
let campusEmail = document.querySelectorAll('input#obrigatorio-3');
for( let emFoco of campusEmail) {
    validaEmail(emFoco);
}


function validaEndereco(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();

        if(this.value == "") {
            document.querySelector('.telaMensagem').innerHTML = "Por favor, preencha os campos corretamente";
        } else {
            document.querySelector('.telaMensagem').innerHTML = "";
        }
    })
}
let campusEndereco = document.querySelectorAll('input#obrigatorio-4');
for(let emFoco of campusEndereco) {
    validaEndereco(emFoco);
}



function disableButton() {
    let obrigatorio1 = document.querySelector('#obrigatorio-1').value;
    let obrigatorio2 = document.querySelector('#obrigatorio-2').value;
    let obrigatorio3 = document.querySelector('#obrigatorio-3').value;
    let obrigatorio4 = document.querySelector('#obrigatorio-4').value;
    if(obrigatorio1 && obrigatorio2 && obrigatorio3 && obrigatorio4) {
        document.querySelector('#btn').disabled = false;
        return
    } else {
        document.querySelector('#btn').disabled = true;
    }
}

function disableButton2(emailValido) {
    emailValido.match(obrigatorio3);
}



const myCarouselElement = document.querySelector('#carouselExampleFade')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
            wrap: true
        })