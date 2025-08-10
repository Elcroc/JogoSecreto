function imc (peso, altura) {
    let imc = (peso / (altura * altura) );     
}
function fatorial (numero) {
    if (numero === 0 || numero === 1 ){
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial
}
let cotacaoDollar = 5.46;
function cotacao (Dollar) {
 let real = cotacaoDollar * Dollar;
 return real;
}
let valor = prompt('qunato dolar tens ?');
let real = cotacao (valor);
console.log (`Você possui R$ ${real} `);
function calcula (altura, largura) {
    let perimetro = ((altura * 2)+ (largura * 2));
  console.log (`O perimetro sera de ${perimetro} !.`)
    let area = (altura * largura);
    console.log (`A Area sera de ${area} !.`)
}
calcula(8 , 57);
function circular (raio) {
    let perimetro = (2 * 3.14 * raio);
    let raio = (3.14 * (raio * raio));
    console.log (`O perimetro sera de ${perimetro} !.`)
    console.log (`A Area sera de ${area} !.`)
}
circular (89);
function tabuada (x) {
    for (let i = 0; i <= 10;i++){
        numero = (x * i);
        console.log (numero);
    }
}
tabuada (7);