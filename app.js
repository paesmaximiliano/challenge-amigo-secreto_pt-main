// Função para adicionar o nome à lista
function adicionarAmigo() {
    // Obtendo o valor do campo de texto e removendo espaços extras
    const nomeAmigo = document.getElementById('amigo').value.trim();
    
    // Validando a entrada para garantir que não esteja vazia
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }
    
    // Validando se o nome contém apenas caracteres válidos (alfabéticos)
    if (!/^[A-Za-záéíóúãõâêîôûàèìòùçÁÉÍÓÚÃÕÂÊÎÔÛÀÈÌÒÙÇ ]+$/.test(nomeAmigo)) {
        alert('O nome só pode conter letras e espaços.');
        return;
    }

    // Verificando se o nome já existe na lista
    const listaAmigos = document.querySelectorAll('#listaAmigos li');
    for (let i = 0; i < listaAmigos.length; i++) {
        if (listaAmigos[i].textContent.toLowerCase() === nomeAmigo.toLowerCase()) {
            alert('Este nome já foi adicionado à lista.');
            return;
        }
    }

    // Criando o item da lista
    const li = document.createElement('li');
    li.textContent = nomeAmigo;

    // Criando o botão de remoção
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = ' X ';
    botaoRemover.title = ' Remover item '
    botaoRemover.classList.add('remove-button');
    botaoRemover.onclick = function () {
        removerAmigo(li);
    };

    // Adicionando o botão de remoção ao item da lista
    li.appendChild(botaoRemover);

    // Adicionando o item à lista de amigos
    const listaAmigosContainer = document.getElementById('listaAmigos');
    listaAmigosContainer.appendChild(li);

    // Limpando o campo de entrada
    document.getElementById('amigo').value = '';
}

// Função para remover um amigo da lista
function removerAmigo(item) {
    // Remover o item da lista
    item.remove();
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Obtendo a lista de amigos
    const listaAmigos = document.querySelectorAll('#listaAmigos li');

    // Verificando se há pelo menos um amigo na lista
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear!');
        return;
    }

    // Gerando um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    // Pegando o nome sorteado
    const amigoSorteado = listaAmigos[indiceAleatorio].textContent.replace('X', '').trim();

    // Exibindo o nome sorteado na lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>${amigoSorteado}</strong> foi o seu amigo secreto!</li>`;
}
