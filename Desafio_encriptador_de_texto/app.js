let textoCambiado = "";

function guardarTexto() {
    let textoInicial = document.getElementById("miParrafoTextarea").value;
    localStorage.setItem("textoGuardado", textoInicial); 
}
function mostrarTexto() {
    let textoGuardado = localStorage.getItem("textoGuardado");
    document.getElementById("mostrarTexto").innerText = textoGuardado;    
}

function procesarTexto() {    
    document.getElementById("imagen").style.display = "none";
    let texto = document.getElementById("miParrafoTextarea").value;
  

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];       
        if (letra === 'e') {
            textoCambiado += 'enter';
        } else if (letra === 'i') {
            textoCambiado += 'imes';
        } else if (letra === 'a') {
            textoCambiado += 'ai';
        } else if (letra === 'o') {
            textoCambiado += 'ober';
        } else if (letra === 'u') {
            textoCambiado += 'ufat';
        } else {            
            textoCambiado += letra;
        }
    } 
  document.getElementById("resultado").innerText = textoCambiado;
 /* window.location.href = 'encriptar.html';*/
}
function guardarTextoEncriptado() {
    let textoIniciale = document.getElementById("resultado").value;
    localStorage.setItem("textoGuardadoE", textoIniciale); 
}
function mostrarTextoEncriptado() {
    let textoGuardadoE = localStorage.getItem("textoGuardadoE");
    document.getElementById("mostrarTextoE").innerText = textoGuardadoE;    

}
    function desencriptarTexto() {          
        document.getElementById("imagen").style.display = "none";
        let texto = document.getElementById("miParrafoTextarea").value;
        let reemplazos = {
            "enter": "e",
            "imes": "i",
            "ai": "a",
            "ober": "o",
            "ufat": "u"
        };        
        for (let frase in reemplazos) {
            let regex = new RegExp(frase, "gi");
            texto = texto.replace(regex, reemplazos[frase]);
        }        
        document.getElementById("resultado").innerText = texto;
       /* window.location.href = 'desencriptar.html';*/
    }
    
    function mostrarBotonCopiar() {       
        let botonCopiar = document.getElementById("botonCopiar");
        botonCopiar.style.display = "block";        
    }
    
    function copiarTexto() {        
        let copyTexto = document.getElementById("resultado").innerText;
        navigator.clipboard.writeText(copyTexto).then(function() {
         alert("Texto copiado: " + copyTexto);
         }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
        });            
    }

    