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

let num1 = parseFloat(prompt("Digite um número:"));
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

numbers(num1, num2);