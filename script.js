//1. Crie uma função que:
//Recebe 2 números (chamaremos de num1 e num2)
//Compara esses números entre si:
//Se os números forem iguais, retorna uma mensagem de sucesso
//Depois, chame a função com números que foram inseridos pelo usuário através do prompt

//Forma professor.
/*function comparaNumeros(num1, num2) {
    if (num1 === num2) {
        return true
    }
    return false
}

console.log(comparaNumeros(150,150));*/




//2. Crie uma função que:
//Recebe 2 números (chamaremos de num1 e num2)
//Compara esses números entre si:
//Retorna mensagens dizendo se os números são iguais ou diferentes
//Depois, chame a função com números que foram inseridos pelo usuário através do prompt

/*let num1 = parseFloat(prompt("Digite um número:"));
let num2 = parseFloat(prompt("Digite outro número:"));

function numbers() {
    if (num1 === num2) { 
        alert("Sucesso total cupixa.")
    } else { 
        alert("Os números informados não são iguais!")        
    }
}

numbers(num1, num2);*/



//3.Crie uma função que:
//Recebe 2 números (chamaremos de num1 e num2)
//Compara esses números entre si:
//Retorna mensagens dizendo se o primeiro número é {maior/menor/igual} ao segundo número
//Depois, chame a função com números que foram inseridos pelo usuário através do prompt

/*let num1 = parseFloat(prompt("Digite um número:"));
let num2 = parseFloat(prompt("Digite outro número:"));

function numbers() {
    if (num1 === num2) { 
        
        alert("Sucesso total cupixa.")

    } else if (num1 > num2) { 

        alert("O primeiro número informado é maior!")    

    } else  {

        alert("O segundo número informado é maior!")
        
    }
}

numbers(num1, num2);*/



//4. Escreva um programa que receba o Pokémon inicial escolhido pela pessoa e imprima no console o seu tipo:
//Bulbasauro (Planta e Veneno)
//Charmander (Fogo)
//Squirtle (Água)



/*let pokemon = parseFloat(prompt("Escolha seu Pokemon: (Bulbasauro = 1 / Charmander = 2 / Squirtle = 3)"));

switch(pokemon) {
    case 1:
        alert("Seu pokemon escolhido foi Bulbasauro")
        break

    case 2:
        alert("Seu pokemon escolhido foi Charmander")
        break

    case 3:
        alert("Seu pokemon escolhido foi Squirtle")
        break

    default:
        alert("Seu pokemon não foi encontrado")
        break
}*/



//5.Uma pessoa pode estudar em uma faculdade se:
//Tiver concluído o ensino médio
//Tiver 18 anos ou mais
//Não estiver cursando outra faculdade
//Escreva uma função que receba estes parâmetros e devolva se a pessoa pode ou não estudar nesta faculdade. Receba os dados do usuário pelo prompt e execute a função

/*let ensinoMedio = prompt("Você concluiu o ensino médio? (Sim / Não)");
let idade = parseFloat(prompt("Qual a sua idade? "));
let cursandoFacul = prompt("Você esta cursando outra faculdade? (Sim / Não)");

function verificaFacul(ensinoMedio, idade, cursandoFacul) {
    let mensagem = "";

    if (ensinoMedio.toUpperCase() === "SIM" && idade >= 18 && cursandoFacul.toUpperCase() === "NAO") {
        return mensagem = "Você esta apto para entrar em nossa Instituição."

} else {
        return mensagem = "Você não esta apto para entrar em nossa Instituição."
    }
    return mensagem;
}

let resultado = verificaFacul(ensinoMedio, idade, cursandoFacul);

alert(resultado);*/

/*let numero1 = parseFloat(prompt("Digite um número:"));
    let numero2 = parseFloat(prompt("Digite outro número:"));

    let opcao = parseFloat(prompt("Digite uma opção: \n1 - Soma \n2- Subtração \n3 - Multiplicação \n4 - Divisão"));
    
    switch(opcao) {
        case 1:
            soma = numero1 + numero2;
            alert(soma);
            break;
    
        case 2:
            subtração = numero1 - numero2;
            alert(soma);
            break;
    
        case 3:
            multiplicacao = numero1 * numero2;
            alert(multiplicacao);
            break;
    
        case 4:
            divisao = numero1 / numero2;
            alert(divisao);
            break;
    
        default:
            alert("Opção não encontrada.");
            break;
    }*/

do {
    let numero1 = parseFloat(prompt("Digite um número:"));
    let numero2 = parseFloat(prompt("Digite outro número:"));

    let opcao = parseFloat(prompt("Digite uma opção: \n1 - Soma \n2- Subtração \n3 - Multiplicação \n4 - Divisão"));
    
    switch(opcao) {
        case 1:
            soma = numero1 + numero2;
            alert(soma);
            break;
    
        case 2:
            subtração = numero1 - numero2;
            alert(soma);
            break;
    
        case 3:
            multiplicacao = numero1 * numero2;
            alert(multiplicacao);
            break;
    
        case 4:
            divisao = numero1 / numero2;
            alert(divisao);
            break;
    
        default:
            alert("Opção não encontrada.");
            break;
    }
} while (opcao !== 5);



