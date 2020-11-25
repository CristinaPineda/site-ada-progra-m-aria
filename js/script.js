//se os campos de nome e email estiverem preenchidos
//  envie os dados
//senão
//  peça a usuaria que preencha os campos nome e email


document.getElementById('botaoEnviar').addEventListener('click', validarFormulario )


function validarFormulario(){
  if(document.getElementById('nomeUsuaria').value != "" && document.getElementById('email').value != "" && document.getElementById('telefone').value != "")  {
    alert('Email cadastrado com sucesso! Logo serão enviadas mensagens com novidades em seu email!')
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }

}