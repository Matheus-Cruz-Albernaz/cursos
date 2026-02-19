limpar();

function adicionar() {
    let nomeProduto = document.getElementById('produto').value.split('-')[0];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let preco = parseInt(document.getElementById('produto').value.split(' ').pop().replace('R$', ''));
    if (isNaN(quantidade)) {
        alert('Digite a quantidade antes de inserir no carrinho!');
        return;
    }
    
    preco = preco * quantidade;
    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

    let campoValorTotal = document.getElementById('valor-total')
    let valorTotal = parseInt(campoValorTotal.textContent.replace('R$', ''));
    valorTotal += preco;
    campoValorTotal.textContent = `R$${valorTotal}`
    document.getElementById('quantidade').value = '';
}


function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0'
}