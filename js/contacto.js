let nombre;
let apellido;
let email;
let comentarios;
//validar formularios
function contactoc(){
    let formularioValido = true;
    let emailValido = true
    let nombre= document.getElementById("nombre").value;
    if (nombre == ""){
        formularioValido = false;
    }

    let email= document.getElementById("email").value;
    if (email == ""){
        formularioValido = false;
    } else {
        emailValido = validarEmail(email)
        if(emailValido == false) {
            formularioValido = false;
        }
    }
    
    let comentarios= document.getElementById("mensaje").value;
    if (comentarios == ""){
        formularioValido = false;
    }
    if (formularioValido == true){
        alert ("Tomaremos en cuenta tu opinión") 
        
    } else {
        alert ("Por favor complete todos los campos")
        console.log("Valido:", emailValido)
        if (emailValido == false) {
            alert ("Formato de email incorrecto")
        }
    }
}

function validarEmail(email){
	
	// Define our regular expression.
	var expresionRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionRegular.test(email);
}