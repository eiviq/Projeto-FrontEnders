let botaoEmail = document.getElementById('botao-email');
botaoEmail.disabled = true;


function verificaEmail(campo) {
    //O método substring retorna a parte da string que está entre os index passados como parâmetro
    let usuario = campo.value.substring(0, campo.value.indexOf("@"));
    let dominio = campo.value.substring(campo.value.indexOf("@")+ 1, campo.value.length);

    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) && //O método search retorna -1 caso não encontre a string que que foi passada como parâmetro
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) && 
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("emailMsg").innerHTML="<font color='green'>E-mail válido! </font>";
    botaoEmail.disabled = false;
    }
    else{
    document.getElementById("emailMsg").innerHTML="<font color='red'>E-mail inválido! </font>";
    botaoEmail.disabled = true;
    }
}

botaoEmail.addEventListener("click", function(e){

    e.preventDefault();

    let inputSenha = document.getElementById('m-input-senha').value;

    if(inputSenha.length > 1 && inputSenha != " "){
        alert("Você está logado!");
        refresh;
    }else{
        alert("Digite sua senha!")
    }
})
