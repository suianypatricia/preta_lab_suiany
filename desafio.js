/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ranking = {};

function perguntarMedalhas() {
  rl.question('\nDigite o nome do país (ou "sair" para encerrar): ', (pais) => {
    if (pais.toLowerCase() === 'sair') {
      mostrarRanking();
      rl.close();
      return;
    }

    rl.question('Medalhas de ouro: ', (ouro) => {
      rl.question('Medalhas de prata: ', (prata) => {
        rl.question('Medalhas de bronze: ', (bronze) => {
          const total = parseInt(ouro) + parseInt(prata) + parseInt(bronze);
          ranking[pais] = total;
          console.log(` ${pais} adicionado com ${total} medalhas.`);
          perguntarMedalhas(); // chama novamente para o próximo país
        });
      });
    });
  });
}

function mostrarRanking() {
  console.log('\n #Ranking de medalhas:');
  const ordenado = Object.entries(ranking).sort((a, b) => b[1] - a[1]);

  ordenado.forEach(([pais, total]) => {
    console.log(`# ${pais}: ${total} medalhas`);
  });
}

// Iniciar o programa
console.log(' Programa de contagem de medalhas (digite "sair" para encerrar)');
perguntarMedalhas();
