//SELECTOR ELEMENTOS

let textoInicial = document.getElementById("texto"); // boton encriptar text area ingrese texto a encriptar
let recuadroBlanco = document.getElementById("recuadroBlanco"); // boton encriptar text area ingrese texto a encriptar
const btn_encriptar = document.querySelector("btn_encriptar"); // boton encriptar

// const btn_desencriptar = document.querySelector("btn_desencriptar");  // boton desencriptar
// const area_text = document.querySelector("area_text");  // seccion de img (exclamation), p(Solo letras minúsculas y sin acentos.) 
// const cuadro_text = document.querySelector("cuadro_text"); // boton copiar
const contenido = document.querySelector("#caja2"); // tarjeta derecha del muñeco y texto h2 (Ningun mensaje fue encontrado) p (Ingresa el texto que desees encriptar o desencriptar)
// const btn_copiar = document.querySelector("copiar"); // boton copiar


const textoCifrado = [
    ["e", "enter"],   //indice 0
    ["i", "imes"],   //indice 1
    ["a", "ai"], //indice 1
    ["o", "ober"],   //indice 3
    ["u", "ufat"],   //indice 4
];


function btnEncriptar() {
    const texto = textoInicial.value

    let resultado = encriptarT(texto);


    recuadroBlanco.value = resultado;


}

function encriptarT(textoEncriptado) {
    for (let i = 0; i < textoCifrado.length; i++) {
        if (textoEncriptado.includes(textoCifrado[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(
                textoCifrado[i][0],
                textoCifrado[i][1]
            )
        }
    }

    return textoEncriptado;
}


let textoDesencriptado;
let textoAdDesencriptar 


function btnDesencriptar() {
    textoAdDesencriptar = document.getElementById('texto').value;
    console.log(textoAdDesencriptar); 
    textoCifrado.forEach(function (subArray) {
        let vocal = subArray[0]
        let reemplazo = subArray[1]
        let reg = new RegExp (reemplazo, "g");
        textoAdDesencriptar = textoAdDesencriptar.replace(reg, vocal);
    })
    recuadroBlanco.value = textoAdDesencriptar;  
}




