const nomeBeneficiario = document.getElementById('nome_beneficiario');
let formValido = false;
const form = document.getElementById('form_dep');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');

    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    
    e.preventDefault();
    
    const numeroConta = document.getElementById('numero_conta');
    const valorDeposito = document.getElementById('valor_deposito');
    const mensagemSucesso = `Valor de: <b>${valorDeposito.value}</b> foi depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta nº: <b>${numeroConta.value}</b>`;
    formValido = validaNome(nomeBeneficiario.value);

    if(formValido){
        const containerMensagemSucesso = document.querySelector('.mensagem_sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';
    }else{
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.mensagem_erro').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if(!formValido){
        nomeBeneficiario.classList.add('error');
        document.querySelector('.mensagem_erro').styple.display = 'block';
    }else{
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.mensagem_erro').styple.display = 'none';
    }
})