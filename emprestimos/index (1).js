function calcular(){
    let valor = document.getElementById("valor").value;
let parcelas = document.getElementById("parcelas").value;
valor = Number(valor);
parcelas = Number(parcelas);
let taxa = 1;
if (parcelas == 3){
    taxa = 1.10;
}
else if (parcelas == 5){
taxa = 1.20;
}
let total = valor * taxa
let parcela = total / parcelas;
  if (parcelas == 1){
        document.getElementById("resultado").innerHTML += 
        "Total: R$ " + total.toFixed(2) + " <br>";
    } 
    else {
        document.getElementById("resultado").innerHTML += 
        "Total: R$ " + total.toFixed(2) + 
        " | " + parcelas + "x de R$ " + parcela.toFixed(2) + "<br>";
    }
}