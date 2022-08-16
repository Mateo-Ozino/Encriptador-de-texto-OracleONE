const btnDesencriptar = document.querySelector('#btnDesencriptar');
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnCopiarTexto = document.querySelector('#copiarTexto');
const containerTexto = document.querySelector('#containerTexto');
const containerResultado = document.querySelector('#containerResultado');
const ilustracion = document.querySelector('.seccion__div-image');
const aviso = document.querySelector('.seccion-resultado__div-aviso');

const CARACTERES_PERMITIDOS = /^[a-zA-Z !ñ]+$/;

//Claves de encriptacion:
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 
btnCopiarTexto.style.display = 'none';

function encriptar() {
    let texto = containerTexto.value;
    let resultado = '';
    if (texto.match(CARACTERES_PERMITIDOS)) {
        for (let i = 0; i < texto.length; i++) {
            let letras = texto[i].toLowerCase();
            switch (letras) {
                case 'e':
                    resultado += 'enter';
                    break;
                case 'i':
                    resultado += 'imes';
                    break;
                case 'a':
                    resultado += 'ai';
                    break;
                case 'o':
                    resultado += 'ober';
                    break;
                case 'u':
                    resultado += 'ufat';
                    break;
                default:
                    resultado += letras;
                    break;
            }
        }
        containerResultado.innerHTML = resultado;
        ilustracion.style.display = 'none';
        aviso.style.display = 'none';
        btnCopiarTexto.style.display = 'block';
    } else {
        alert('El texto no tiene caracteres permitidos. Intente de nuevo.');
    }
}

function desencriptar() {
    let texto = containerTexto.value;
    let resultado = '';
    let palabras = texto.split(' ');
    if (texto.match(CARACTERES_PERMITIDOS)) {
        for (let palabra of palabras) {
            resultado += palabra.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
            resultado += ' ';
        }
        containerResultado.innerHTML = resultado;
        ilustracion.style.display = 'none';
        aviso.style.display = 'none';
        btnCopiarTexto.style.display = 'block';
    } else {
        alert('El texto no tiene caracteres permitidos. Intente de nuevo.');
    }
}

function copiarTexto() {
    let texto = containerResultado.innerHTML;
    navigator.clipboard.writeText(texto);
}

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);
btnCopiarTexto.addEventListener('click', copiarTexto);