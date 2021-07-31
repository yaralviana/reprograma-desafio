var inputHorasPorDia = document.querySelector("#horas-dia");
var inputGanhoPorMes = document.querySelector("#ganho-mes");

var spanHoraFinal = document.querySelector(".secao__rodape .secao__rodape__valor span");

function calcularValorHora(){
console.log("Hello world :)");
console.log("Input ganho por mês", inputGanhoPorMes.value);
console.log("Valor", inputHorasPorDia.value);

var qtdTotalHoras = inputHorasPorDia.valueAsNumber * 22;
console.log("Total de horas:", qtdTotalHoras);
// com o valor total de horas, fazemos a divisão.

var valorHora = (inputGanhoPorMes.valueAsNumber / qtdTotalHoras).toFixed(2);
console.log("Valor da hora:", valorHora);

spanHoraFinal.textContent = "R$" + valorHora;

};