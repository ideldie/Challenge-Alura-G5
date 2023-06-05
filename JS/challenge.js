// JavaScript source code

     document.addEventListener("keyup", function (event) {
         if (event.key === 'Enter') {
             encriptar();
        
    }
     });

 document.write('<img src="IMG/diamond.png" id="myPhoto" width="50" height="50">');

function encriptar() {
    let textoCapturado = document.getElementById("textoo").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementbyId("muñeco");
    let imagen = document.getElementById("myPhoto").src = "diamond.png";
    let copiar = document.getElementById("copiar");
    let textoCifrado = textoCapturado
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (document.getElementById("textoo").value.length != 0) {
        document.getElementById("textoo").value = textoCifrado;
        document.getElementById("MyPhoto") = muñeco;
        tituloMensaje.textContent = textoCifrado;
        parrafo.textContent = copiar;
        
    }
    else {
        alert("no ha ingresado ningun texto");
            }
}

    function desencriptar() {
        let textoCapturado = document.getElementById("textoo").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo");
        let textoCifrado = textoCapturado
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        if (document.getElementById("textoo").value.length != 0) {
            document.getElementById("textoo").value = textoCifrado;
            tituloMensaje.textContent = textoCifrado;
            parrafo.textContent = "";

            
        }
        else {
            alert("no ha ingresado ningun texto");
        }

    }

function copiarTexto() {
    let textoCapturado = document.getElementById("textoo").value;
    var textoCopiar = document.getElementById("titulo-mensaje").innerHTML;
    if (document.getElementById("textoo").value.length != 0) {
        navigator.clipboard.writeText(textoCopiar);
        parrafo.textContent = "Texto Copiado al portapapeles";
        document.getElementById("textoo").value = "";               
    }
    else {
        alert("Aun no ha ingresado ningun texto");
    }
}




    
