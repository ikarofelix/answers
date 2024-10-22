const prompt = require("prompt-sync")();

function checkLetterA(inputString) {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === 'a' || inputString[i] === 'A') {
          count++;
      }
  }
  if (count > 0) {
    console.log(`A letra 'a' ou 'A' foi encontrada ${count} vezes.`);
  } else {
    console.error("A letra 'a' ou 'A' não foi encontrada.");
  }
}

let exampleString = prompt("Por favor, insira uma palavra: ");
checkLetterA(exampleString);
