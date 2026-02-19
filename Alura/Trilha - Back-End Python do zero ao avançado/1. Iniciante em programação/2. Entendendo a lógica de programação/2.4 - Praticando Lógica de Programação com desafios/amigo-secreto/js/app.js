function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    if (nome == '') {
        alert('Digite o nome do Amigo para incluir na lista!');
        return;
    }
    let listaNome = document.getElementById('lista-amigos');
    if (listaNome.textContent == '') {
        listaNome.textContent = nome;
    } else {
        listaNome.textContent += `, ${nome}`;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    let listaNome = document.getElementById('lista-amigos').textContent;
    let nomesSplit = listaNome.split(',').map(nomes => nomes.trim());

    if (listaNome == '') {
        alert('Insira os Amigos antes de realizar o sorteio!');
        return;
    } else if (nomesSplit.length == 1) {
        alert('Insira mais de um Amigo para realizar o sorteio!');
        return;
    }

    embaralha(nomesSplit);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < nomesSplit.length; i ++) {
        if (i == nomesSplit.length - 1) {
            sorteio.innerHTML += nomesSplit[i] + ' --> ' + nomesSplit[0] + '<br>'
        } else {
            sorteio.innerHTML += nomesSplit[i] + ' --> ' + nomesSplit[i + 1] + '<br>'
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}