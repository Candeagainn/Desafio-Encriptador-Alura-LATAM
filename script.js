
// Variables para conectar los elementos del HTML con el script

const textInput = document.getElementById('textInput');
const outputArea = document.getElementById('outputArea');
const botonCopiar = document.getElementById('botonCopiar');
const mensajesResultado = document.querySelector('.mensajes-resultado');

const llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

let validation = /^[a-z\s]*$/;




// Función para conectar el botón de encriptar con la función encriptar
// Además, asigna el texto encriptado al área de salida y limpia el área de entrada

function botonEncriptar() {
    let textoEncriptado = encriptarTexto(textInput.value);

    if (!validation.test(textInput.value)) { //Verifica si el texto ingresado tiene mayusculas, numeros o acentos
        alert('No se admiten mayúsculas, acentos, ni números');
    } else {
        asignarTexto(outputArea, textoEncriptado);
        asignarTexto(textInput, '');
        botonCopiar.removeAttribute('disabled');
        mensajesResultado.style.display = 'none'; // Oculta los mensajes del area de salida
        outputArea.style.backgroundImage = 'none'; // Elimina la imagen de fondo
    }
}

// Función para conectar el botón de desencriptar con la función desencriptar
// Además, asigna el texto encriptado al área de salida y limpia el área de entrada

function botonDesencriptar() {
    let textoDesencriptado = desencriptarTexto(textInput.value);

    if (!validation.test(textInput.value)) { //Verifica si el texto ingresado tiene mayusculas, numeros o acentos
        alert('No se admiten mayúsculas, acentos, ni números');
    } else {

        asignarTexto(outputArea, textoDesencriptado);
        asignarTexto(textInput, '');
        botonCopiar.removeAttribute('disabled');

        mensajesResultado.style.display = 'none'; // Oculta los mensajes del area de salida
        outputArea.style.backgroundImage = 'none'; // Elimina la imagen de fondo
    }
}


// Función para encriptar el texto ingresado por el usuario
function encriptarTexto(texto) {
    texto = texto.toLowerCase();

    //Recorremos el array de llavesEncriptacion y si el texto ingresado contiene alguna de las llaves, la reemplazamos por su valor.
    for (let i = 0; i < llavesEncriptacion.length; i++) {
        if (texto.includes(llavesEncriptacion[i][0])) {
            texto = texto.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    console.log(llavesEncriptacion)

    return texto;
}

// Función para desencriptar el texto ingresado por el usuario
function desencriptarTexto(texto) {
    texto = texto.toLowerCase();

    for (let i = llavesEncriptacion.length - 1; i >= 0; i--) {
        if (texto.includes(llavesEncriptacion[i][1])) {
            texto = texto.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        } console.log(texto)
    }
    return texto;
}


function copiarAlPortapapeles() {
    const textoACopiar = outputArea.value;
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            alert("Texto copiado al portapapeles")
            console.log('Texto copiado al portapapeles');
        })
        .catch((error) => {
            console.error('Fallo al copiar el texto al portapapeles:', error);
        })
}


// function encriptar(){
//     let texto = textInput.value.toLowerCase();
//     let resultado = '';
//     for (let i = 0; i < texto.length; i++) {
//         switch (texto[i]) {
//             case 'a': resultado += 'ai'; break;
//             case 'e': resultado += 'enter'; break;
//             case 'i': resultado += 'imes'; break;
//             case 'o': resultado += 'ober'; break;
//             case 'u': resultado += 'ufat'; break;
//             default: resultado += texto[i];
//         }

//     } asignarTexto(outputArea, resultado);
//     console.log(resultado);
// }

function desencriptar() {
    let texto = textInput.value.toLowerCase();
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        switch (texto.substring(i, i + 5)) {
            case 'a': resultado += 'a'; i = i + 1; break;
            case 'enter': resultado += 'e'; i = i + 4; break;
            case 'imes': resultado += 'i'; i = i + 3; break;
            case 'ober': resultado += 'o'; i = i + 3; break;
            case 'ufat': resultado += 'u'; i = i + 3; break;
            default: resultado += texto[i];
        }
        console.log(resultado)

    } asignarTexto(outputArea, resultado);
    console.log(resultado);
}

function asignarTexto(elem, text) {
    elem.value = text;
}