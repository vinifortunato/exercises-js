/*
6. Fácil
Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000).
Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.
*/

console.log(parseFloat('10.5'));
const sumStoreB = 54000;

let sumStoreA = 0;
for (let i=1; i<=5; i++) {
  const value = prompt(`Qual foi o valor da compra do cliente ${i}?`);
  sumStoreA += parseFloat(value);
}

console.log('Faturamento loja A', sumStoreA);
console.log('Faturamento loja B', sumStoreB);

if (sumStoreA > sumStoreB) {
  console.log('O faturamento da loja A foi maior do que a da loja B');
} else {
  console.log('O faturamento da loja A não foi maior do que a da loja B');
}
