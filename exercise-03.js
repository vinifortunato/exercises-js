/*
3. Fácil
Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, quando divididos por 11. produzam resto igual a 2.
*/

for (let i=1000; i<=2000; i++) {
  const result = i % 11;
  if (result === 2) {
    console.log(i);
  }
}
