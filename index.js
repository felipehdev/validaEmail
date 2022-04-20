var email = prompt("Qual seu email?")

function validaEmail(email) {
    if (email.indexOf("@") >= 0) {
        "true";        
    } else if (email.indexOf("@") === -1) {
        "false";
    } else {
        "error";
    }
}

validaEmail(email)

var resultValidaEmail = validaEmail(email)

function exibeResultValidacao(resultValidaEmail) {
    if (resultValidaEmail = "true") {
        document.write("Email validado")        
    } else if (resultValidaEmail = "false") {
        document.write("Email fornecido INVALIDO")    
    } else {
        document.write("ERRO")
    }
    
}

exibeResultValidacao(resultValidaEmail)