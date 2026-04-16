
const divInputs = document.getElementById("inputs");
for (let i = 0; i < 10; i++) {
  divInputs.innerHTML += `<input type="number" id="n${i}">`;
}

function calcular() {
  let vetor = [];

  for (let i = 0; i < 10; i++) {
    let valor = Number(document.getElementById(`n${i}`).value);
    vetor.push(valor);
  }

  let soma = vetor.reduce((a, b) => a + b, 0);
  let media = soma / vetor.length;

  let ordenado = [...vetor].sort((a, b) => a - b);
  let mediana = (ordenado[4] + ordenado[5]) / 2;

  let moda = vetor[0];
let maiorContagem = 0;

for (let i = 0; i < vetor.length; i++) {
  let contagem = 0;

  for (let j = 0; j < vetor.length; j++) {
    if (vetor[i] === vetor[j]) {
      contagem++;
    }
  }

  if (contagem > maiorContagem) {
    maiorContagem = contagem;
    moda = vetor[i];
  }
}
 
  let positivos = vetor.filter(n => n > 0).length;
  let negativos = vetor.filter(n => n < 0).length;
  let zeros = vetor.filter(n => n === 0).length;

  let pares = vetor.filter(n => n % 2 === 0).length;
  let impares = vetor.length - pares;

  let desvios = vetor.map(n => n - media);

 
  let semDuplicados = [...new Set(vetor)];

  let quadrado = vetor.map(n => n ** 2);

  let maioresQueMedia = vetor.filter(n => n > media);


  let menor = Math.min(...vetor);
  let semMenor = vetor.filter(n => n !== menor);

  let novo = [...vetor];
  novo[1] = 100;
  novo[4] = 999;

  let copia = vetor.slice(3);

  document.getElementById("resultado").innerHTML = `
    <h3>Estatísticas</h3>
    Soma: ${soma} <br>
    Média: ${media.toFixed(2)} <br>
    Mediana: ${mediana} <br>
    Moda: ${moda} <br>

    <h3>Análises</h3>
    Positivos: ${positivos} <br>
    Negativos: ${negativos} <br>
    Zeros: ${zeros} <br>
    Pares: ${pares} <br>
    Ímpares: ${impares} <br>
    Desvios: ${desvios} <br>

    <h3>Manipulação</h3>
    Ordenado: ${ordenado} <br>
    Sem duplicados: ${semDuplicados} <br>
    Quadrado: ${quadrado} <br>
    Maiores que média: ${maioresQueMedia} <br>

    <h3>Extra</h3>
    Sem menor: ${semMenor} <br>
    Inserido/Substituído: ${novo} <br>
    Cópia sem 3 primeiros: ${copia}
  `;
}