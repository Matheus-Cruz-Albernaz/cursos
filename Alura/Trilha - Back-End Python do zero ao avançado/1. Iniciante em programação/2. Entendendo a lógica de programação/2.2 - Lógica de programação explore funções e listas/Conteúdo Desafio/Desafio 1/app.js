let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
let cidade;
let numero1;
let numero2;

function clickConsole() {
    console.log('Cliquei no botão Console');
}

function clickAlert() {
    alert('Eu amo JS');
}

function clickPrompt() {
    cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function clickSoma() {
    numero1 = prompt('Digite o primeiro número');
    numero2 = prompt('Digite o segundo número');

    alert(`A soma de ${numero1} + ${numero2} = ${parseInt(numero1) + parseInt(numero2)}`)
}