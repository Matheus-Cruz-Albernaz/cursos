/* 1. INICIANDO COM JAVASCRIPT */

// AULA 1
alert('Boas vindas ao jogo do número secreto');

// // AULA 2
// let numeroSecreto = 5;
// let chute = prompt('Escolha um número entre 1 e 10');

// // AULA 3
// if (chute == numeroSecreto) {
//     console.log('Isso aí! Você descobriu o número secreto (5)');
// }

// // ALERT E PROMPT
// let mensagemDeBoasVindas = 'Boas vindas ao App';
// alert('mensagemDeBoasVindas');



// // ALTERANDO O VALOR DAS VARIÁVEIS
//  alert('Boas-vindas ao jogo do número secreto')
//  let chuteDesafio2 = prompt('Escolha um número de 1 e 10')

//  let numeroSecretoDesafio2 = 4

//  if (chuteDesafio2 == numeroSecretoDesafio2) {
//     alert('Acertou')
//  }



// // ONDE ESTÁ O BUG
// let senhaDoSistema = "senhaTeste!";

// let senha = prompt('Digite a senha do sistema:');

// if (senha = (aqui está o bug) senhaDoSistema){
//     alert('Acesso ao sistema garantido');
// }



// // PRÉ DESAFIO
// // // Guarda o nome de uma pessoa
// // let nome = "Ana";

// // // Guarda a idade
// // let idade = 25;

// // // Guarda um valor de saldo
// // let saldoDisponivel = 1000;

// // alert('Estou aprendendo JavaScript');

// // // Pede o nome da pessoa e guarda na variável
// // let nomeUsuario = prompt('Digite seu nome');

// // // Pede a idade da pessoa e guarda na variável
// // let idadeUsuario = prompt('Digite sua idade');

// let temPao = prompt('Você tem pão em casa? Responda com sim ou não');

// if (temPao === "sim") {
//     alert('Fazer sanduíche');
// } else {
//     alert('Fazer miojo');
// }



// // DESAFIO
// /*1*/ alert('Boas vindas ao nosso site!');
// // /*2*/ let nome = "Lua";
// // /*3*/ let idade = 25;
// /*4*/ let numerDeVendas = 50;
// /*5*/ let saldoDisponivel = 1000;
// /*6*/ alert('Erro! Preencha todos os campos');
// /*7*/ let mensagemDeErro = "Erro! Preencha todos os campos";
// /*8*/ let nome = prompt('Digite seu nome');
// /*9*/ let idade = prompt('Digite sua idade');

// /*10*/
// if (idade >= 18) {
//     alert('Pode tirar a habilitação!')
// }




/* 2. CONDICIONAIS E CONCATENA */

// // AULA 4
// console.log(numeroSecreto);
// if (chute == numeroSecreto) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
// } else {
//     alert('Você errou :(');
// }



// // ALTERANDO A MENSAGEM DO ALERT
// alert('Bem-vindo ao jogo do número secreto')
// let chute = prompt('Escolha um número entre 1 e 10')

// let numeroSecreto = 5

// console.log(chute == numeroSecreto)
// if (chute == numeroSecreto) {
//     alert('Acertou')
// } else {
//     alert('O número secreto era ' + numeroSecreto + ', mas você escolheu ' + chute);
// }



// // DETRAN
// let idade = prompt('Digite sua idade:');

// if (idade >= 18) {
//   console.log("Você é maior de idade.");
// } else {
//   console.log("Você é menor de idade.");
// }



// // TRABALHANDO COM CONDICIONAIS

// let porcentagemDesconto = 0;
// let quantidadeMilhas = 500;

// // errado 
// // if(quantidadeMilhas > 5000){
// //     porcentagemDesconto = porcentagemDesconto + 10;
// // }

// // if(quantidadeMilhas >= 30000){
// //     porcentagemDesconto = porcentagemDesconto + 20;
// // } else {
// //     porcentagemDesconto = 0;
// // }

// // certo
// if(quantidadeMilhas >= 30000) {
//     porcentagemDesconto = 20;
// } else if(quantidadeMilhas >= 5000) {
//     porcentagemDesconto = 10;
// }

// console.log(porcentagemDesconto);



// DESAFIO
// /*1*/
// let diaDaSemana = prompt('Qual o dia da semana?');
// if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// }
// /*2*/
// let numeroDigitado = prompt('Digite um número');
// if (numeroDigitado >= 0) {
//     alert('Número Positivo');
// } else {
//     alert('Número Negativo');
// }
// /*3*/
// let pontos = prompt('Digite sua pontuação');
// if (pontos >= 100) {
//     alert('Parabéns, você venceu!');
// } else {
//     alert('Tente novamente para ganhar.');
// }
// /*4*/
// let saldoConta = prompt('Digite seu saldo em conta');
// alert(`O saldo atual é de ${saldoConta}`);
// /*5*/
// let nome = prompt('Digite seu nome');
// alert(`Seja bem-vindo ${nome }`);



/* 3. LOOPS E TENTATIVAS */

// // AULA 5
// console.log(numeroSecreto);
// if (chute == numeroSecreto) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
// } else {
//     if (chute > numeroSecreto) {
//         alert(`O número secreto é menor que ${chute}`);
//     } else {
//         alert(`O número secreto é maior que ${chute}`);
//     }
// }

// // AULA 6
// console.log(numeroSecreto);
// let chute;
// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 10');

//     if (chute == numeroSecreto) {
//         alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//     }
// }

// // AULA 7
// console.log(numeroSecreto);
// let chute;
// let tentativas = 1;

// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 10');

//     if (chute == numeroSecreto) {
//         alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         tentativas ++;
//     }
// }



// // CONTADOR 1
// let contador = 1;

// while (contador < 4) {
//   console.log('Executando a interação ' + contador);
//   contador = contador + 1;
// }



// // LOOP INFINITO
// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = qtdNumeros;

// while(contador > 0){ /* Erro no while*/
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
// }

// let media = soma / qtdNumeros;

// console.log(media);



// DESAFIO
/*1*/
// let contador = 1;

// while (contador <= 10) {
//   console.log(contador);
//   contador++;
// }
/*2*/
// let contador = 10;

// while (contador >= 0) {
//   console.log(contador);
//   contador--;
// }
/*3*/
// let contador = prompt('Digite um número');

// while (contador >= 0) {
//   console.log(contador);
//   contador--;
// }
/*3*/
// let contador = prompt('Digite um número');
// let contadorComparativo = 0;

// while (contador >= contadorComparativo) {
//   console.log(contadorComparativo);
//   contadorComparativo++;
// }



// // PARA SABER MAIS: OPERADORES LÓGICOS
// let idade = 25;
// let possuiCarteira = true;

// // se idade é maior que 18 e possui carteira…
// if (idade > 18 && possuiCarteira) {
//   console.log("Pode dirigir!");
// } else {
//   console.log("Não pode dirigir.");
// }


// let temMaça = false;
// let temBanana = true;

// // se tem maça ou tem banana…
// if (temMaça || temBanana) {
//   console.log("Você tem frutas!");
// } else {
//   console.log("Não tem frutas.");
// }



/* 4. BOAS PRÁTICAS DE PROGRAMAÇÃO */

// // AULA 8
// console.log(numeroSecreto);
// let chute;
// let tentativas = 1;

// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 10');

//     if (chute == numeroSecreto) {
//         break;
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         tentativas ++;
//     }
// }

// if(tentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }

// // AULA 9
// console.log(numeroSecreto);
// let chute;
// let tentativas = 1;

// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 10');

//     if (chute == numeroSecreto) {
//         break;
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         tentativas ++;
//     }
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
// alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// // AULA 10
// let numeroSecreto = parseInt(Math.random() * 100 + 1);
// let chute;
// let tentativas = 1;

// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 100');

//     if (chute == numeroSecreto) {
//         break;
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         tentativas ++;
//     }
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
// alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);




/* 5. DESAFIO */

// DESAFIO FINAL
let valorMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${valorMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);