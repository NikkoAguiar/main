const nomeBeneficiario = document.getElementById('nome_beneficiario');
let formValido = false;
const form = document.getElementById('form_dep');
const containerMensagemSucesso = document.querySelector('.mensagem_sucesso');
const containerMensagemErro = document.querySelector('.mensagem_erro');
const numeroConta = document.getElementById('numero_conta');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');

    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    
    e.preventDefault();
    
    
    const valorDeposito = document.getElementById('valor_deposito');
    const mensagemSucesso = `Valor de: <b>${valorDeposito.value}</b> foi depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta nº: <b>${numeroConta.value}</b>`;
    const mensagemErro = `O nome não está completo!`
    formValido = validaNome(nomeBeneficiario.value);

    if(formValido){
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';
    }else{
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
        // nomeBeneficiario.style.border = '1px solid red';
        // document.querySelector('.mensagem_erro').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if(!formValido){
        nomeBeneficiario.classList.add('error');
        document.querySelector('.mensagem_erro').style.display = 'block';
    }else{
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.mensagem_erro').style.display = 'none';
    }
})

let containerNumeroConta = [];

numeroConta.addEventListener('keyup', function(e){
    console.log(e.target.value);

    containerNumeroConta.push(numeroConta.value);
    console.log(containerNumeroConta);

    if(containerNumeroConta.length < 8){
        numeroConta.classList.add('error');
        document.querySelector('.mensagem_erro_numero').style.display = 'block';
    }else{
        numeroConta.classList.remove('error');
        document.querySelector('.mensagem_erro_numero').style.display = 'none';
    }
})