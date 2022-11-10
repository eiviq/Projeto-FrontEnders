function visualizar(){
    const cep = document.getElementById("cep").value;
    axios.get("https://viacep.com.br/ws/"+cep+"/json/").then(response =>{
        var endereco = response.data;
        document.getElementById("estado").value = endereco.uf;
        document.getElementById("cidade").value = endereco.localidade;
        document.getElementById("bairro").value = endereco.bairro;
        document.getElementById("rua").value  = endereco.logradouro;
   
    })
}