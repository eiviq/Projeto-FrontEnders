let botaoEmail = document.getElementById('botao-email');
botaoEmail.disabled = true;
let controle = 2;


function validacaoEmail(campo) {
    let usuario = campo.value.substring(0, campo.value.indexOf("@"));
    let dominio = campo.value.substring(campo.value.indexOf("@")+ 1, campo.value.length);

    console.log(usuario);

    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("emailMsg").innerHTML="<font color='green'>E-mail válido </font>";
    botaoEmail.disabled = false;
    }
    else{
    document.getElementById("emailMsg").innerHTML="<font color='red'>E-mail inválido </font>";
    botaoEmail.disabled = true;
    }
}

botaoEmail.addEventListener("click", function(e){

    e.preventDefault();

    let inputSenha = document.getElementById('m-input-senha').value;

    if(inputSenha.length > 1 && inputSenha != " "){
        alert("Deu certo!");
        refresh;
    }else{
        alert("Digite sua senha!")
    }
})
