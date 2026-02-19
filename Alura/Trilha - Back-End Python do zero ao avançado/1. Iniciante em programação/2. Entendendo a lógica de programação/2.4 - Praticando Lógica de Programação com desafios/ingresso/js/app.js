function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    if (isNaN(quantidade)) {
        alert('Digite a quantidade antes de comprar!');
        return;
    }
    
    let campoIngressosDisponiveis = document.getElementById(`qtd-${tipoIngresso}`);
    let ingressosDisponiveis = campoIngressosDisponiveis.textContent;
    if (ingressosDisponiveis == 0) {
        alert('Ingressos esgotados para este setor!');
    } else if (quantidade > ingressosDisponiveis) {
        alert(`Quantidade de ingressos indisponíveis para este setor. Altere a quantidade`);
    } else {
        ingressosDisponiveis -= quantidade;
        campoIngressosDisponiveis.textContent = ingressosDisponiveis;
        alert('Compra realizada com sucesso!');
    }
}