// 1)
let a = 10;
let b = 25;
let c = 50;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
// 2)

if (a > b) {
    console.log("a é maior!")
} else {
    console.log("b é maior!")
}
// 3)
if (a > b && c) {
    console.log("a é maior!")
} else if (b > a && b > c) {
    console.log("b é maior!")
} else if (c > b && c > a) {
    console.log("c é maior!")
}
// 4)
const valor = 0;

if (valor > 0) {
    console.log("Positive!")
} else if (valor < 0) {
    console.log("Negative!")
} else {
    console.log("ZERO")
}
// 5)
const a = 90
const b = 60
const c = 30
let soma = a + b + c;

if (a < 0 || b < 0 || c < 0) {
    console.log("ERRO")
} else if (soma == 180) {
    console.log("True")
} else if (soma < 180) {
    console.log("False")
} else {
    console.log("erro!")
}

// 6) 
const queen = "rainha";
let peca = "RAINHA"
if (queen == peca.toLowerCase()) {
    console.log(" horizontal, vertical e diagonais")
} else {
    console.log("ERRO!")
}
// 7)
let nota = 79

if (nota < 0 || nota > 100) {
    console.log("ERRO!")
} else if (nota >= 90) {
    console.log("A")
} else if (nota >= 80) {
    console.log("B")
} else if (nota >= 70) {
    console.log("C")
} else if (nota >= 60) {
    console.log("D")
} else if (nota >= 50) {
    console.log("E")
} else if (nota <= 50) {
    console.log("F")
}
// 8)
const a = 3
const b = 2
const c = 13


if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log("true")
} else {
    console.log("false")
}
// 9)
const a = 3
const b = 2
const c = 14


if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    console.log("true")
} else {
    console.log("false")
}
// 10)
const valorCusto = 10;
const valorVenda = 25;
const impostoSobreOCusto = 0.20;

let valorCustoTotal = valorCusto * impostoSobreOCusto + valorCusto;
let lucro = valorVenda - valorCustoTotal;
let qtdPedido = 1000;

if (valorCustoTotal <= 0 || valorVenda <= 0 || impostoSobreOCusto <= 0 || qtdPedido <= 0) {
    console.log("ERRO!")

} else if (qtdPedido > 1) {
    console.log(lucro * qtdPedido + " " + "esse é o lucro sobre a venda de" + " " + qtdPedido + " " + "produtos")
}
// 11)
let salario = 3500;
let descontoINSS;
let descontoIR;
let salarioLiquido;
// Desconto do INSS
if (salario <= 1556.94) {
    descontoINSS = salario * 0.08;
    console.log(descontoINSS + " desconto referente a 8%");
} else if (salario > 1556.95 || salario <= 2594.92) {
    descontoINSS = salario * 0.09;
    console.log(descontoINSS + " desconto referente a 9%");
} else if (salario > 2594.93 || salario <= 5189.82) {
    descontoINSS = salario * 0.11;
    console.log(descontoINSS + " desconto referente a 11%");
} else if (salario > 5189.82) {
    descontoINSS = 570.88;
    console.log(descontoINSS + " desconto referente ao teto");
}
//Desconto do IR
if (salario <= 1903.984) {
    descontoIR = 0;
    console.log("Isento de desconto do IR")
} else if (salario > 1903.99 || salario <= 2826.65) {
    descontoIR = salario * 0.075;
    console.log(descontoIR + " desconto referente a 7,5%");
} else if (salario > 2826.66 || salario <= 3751.05) {
    descontoIR = salario * 0.15;
    console.log(descontoIR + " desconto referente a 15%");
} else if (salario > 3751.06 || salario <= 4664.68) {
    descontoIR = salario * 0.225;
    console.log(descontoIR + " desconto referente a 22,5%");
} else if (salario >= 4664.68) {
    descontoIR = salario * 0.275;
    console.log(descontoIR + " desconto referente a 27,5%");
}
console.log("Salário líquido " + (salarioLiquido = salario - (descontoINSS + descontoIR)));