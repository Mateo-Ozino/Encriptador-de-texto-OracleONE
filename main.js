//Traigo todos los elementos necesarios del HTML
const btnDesencriptar = document.querySelector('#btnDesencriptar');
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnCopiarTexto = document.querySelector('#copiarTexto');
const containerTexto = document.querySelector('#containerTexto');
const containerResultado = document.querySelector('#containerResultado');
const ilustracion = document.querySelector('.seccion__div-image');
const aviso = document.querySelector('.seccion-resultado__div-aviso');
const seccionResultado = document.querySelector('.seccion-resultado');

//Declaro una expresión regular para validar los caracteres permitidos
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

//Esta funcion se ejecuta cuando se hace click en el boton encriptar. Lleva a cabo la encriptacion.
function encriptar() {
    let texto = containerTexto.value;
    let resultado = '';
    //Antes de encriptar, se verifica que el texto no tenga caracteres no permitidos.
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
        //Se llevan a cabo los cambios en el html y el css.
        containerResultado.innerHTML = resultado;
        seccionResultado.classList.add('seccion-resultado-nueva');
        ilustracion.style.display = 'none';
        aviso.style.display = 'none';
        btnCopiarTexto.style.display = 'block';
    } else {
        alert('El texto no tiene caracteres permitidos. Intente de nuevo.');
    }
}

//Esta funcion se ejecuta cuando se hace click en el boton desencriptar. Lleva a cabo la desencriptacion.
function desencriptar() {
    let texto = containerTexto.value;
    let resultado = '';
    let palabras = texto.split(' ');
    //Antes de desencriptar, se verifica que el texto no tenga caracteres no permitidos.
    if (texto.match(CARACTERES_PERMITIDOS)) {
        for (let palabra of palabras) {
            resultado += palabra.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
            resultado += ' ';
        }
        //Se llevan a cabo los cambios en el html y el css.
        containerResultado.innerHTML = resultado;
        seccionResultado.classList.add('seccion-resultado-nueva');
        ilustracion.style.display = 'none';
        aviso.style.display = 'none';
        btnCopiarTexto.style.display = 'block';
    } else {
        alert('El texto no tiene caracteres permitidos. Intente de nuevo.');
    }
}

//Esta funcion se ejecuta cuando se hace click en el boton copiar texto. Lleva a cabo la copia del texto al clipboard.
function copiarTexto() {
    let texto = containerResultado.innerHTML;
    navigator.clipboard.writeText(texto);
}

//Eventos de los botones
btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);
btnCopiarTexto.addEventListener('click', copiarTexto);