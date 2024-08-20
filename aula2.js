// var = criando variavel

//var altura = 10;
//var largura = 5;
//var area = altura * largura;
//console.log(area);

// let = cria variavel(forma atualizada de criar variaveis)

const altura = 8
const largura = 10
const forma = "Retangulo";
let area;

if (forma === "Retangulo"){
    area = altura * largura
}
else{
    area = (altura * largura) / 2;
}
console.log(area);

// const = Sem permance a mesma(varieveis fixas, ou seja, nao se alteram)
// Condiçoes Booleanas(Truly or Falsy)
// 0 = false
// 1 = true

const usuarioLogado = true;
const contaPaga = false;
console.log(0 == false);
console.log(contaPaga == 0)
console.log(contaPaga === 0)