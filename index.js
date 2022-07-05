const chalk = 
require('chalk');
const fs = require('fs');

// console.log(chalk.blue('vamos começar!'));

// const paragrafo = 'Texto retornado por uma função';

// function texto(string) {
//   return string;
// }

// console.log(texto(paragrafo));


function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.readFile = (caminhoDoArquivo, encoding, (_, texto) => {
    console.log(chalk.green(texto))
  })
}

console.log(pegaArquivo('./arquivos/texto1.md'))