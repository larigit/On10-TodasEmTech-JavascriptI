document.querySelector('#sendButton').addEventListener('click', (event) => {
    //usar preventDefault devido ao comportamento padrao do submit
    event.preventDefault();

    let userName = document.getElementById('userName').value;
    let showMessage = document.getElementById('answer');

    if(userName === ''){
        showMessage.innerText = 'Por favor digite seu nome.';
    }
    else{
        showMessage.innerText = `${userName}, dados salvos com sucesso.`
    }
});