const div = document.querySelector(".container")


const botao = document.createElement('button');
botao.innerText = 'Clique para ver uma mensagem!'
botao.className = 'botao'
div.appendChild(botao)

botao.addEventListener('click', () => {
    const msg = document.createElement('p');
    msg.className = 'msg'
    msg.innerText = ' Enquanto a violência for usada no lugar do diálogo, palavras sempre terão seu poder. \n Palavras oferecem um meio para o significado e para aqueles que escutam a enunciação da verdade.'
    div.appendChild(msg)
    botao.disabled =  true;
})
