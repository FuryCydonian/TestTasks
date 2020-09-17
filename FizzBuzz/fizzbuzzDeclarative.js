// Решение FizzBuzz декларативно, в функциональном стиле

const gen = (n, w) => (num) => num % n === 0 ? w : '';
const fizz = gen(3, 'Fizz');
const Buzz = gen(5, 'Buzz');

[...Array(99).keys()].map(i => i+1).forEach(i => console.log(fizz(i) + Buzz(i) || i));