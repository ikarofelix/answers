const prompt = require("prompt-sync")();

function belongsToFibonacci(num) {
    if (num < 0) return false; 
    if (num === 0 || num === 1) return true;

    let a = 0;
    let b = 1;

    while (b < num) {
        const nextValue = a + b;
        a = b;
        b = nextValue;
    }

    return b === num;
}

const number = parseInt(prompt("Informe um número: "), 10);

if (!isNaN(number)) {
    if (belongsToFibonacci(number)) {
        console.log(`O número ${number} pertence à sequência de Fibonacci.`);
    } else {
        console.error(`O número ${number} não pertence à sequência de Fibonacci.`);
    }
} else {
    console.warn("Por favor, insira um número válido.");
}
