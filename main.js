const {gets, print} = require('./funcoes_auxiliares');

const numeroSortido = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numeroSortido.push(numeroSorteado);
}

let numeroMaior = 0;

for (let i = 0; i < numeroSortido.length; i++) {
    if (numeroSortido[i] > numeroMaior) {
        numeroMaior = numeroSortido[i];
    }
}

print(numeroMaior);