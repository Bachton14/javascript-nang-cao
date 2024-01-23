let amount = 'java';


amount = parseInt(amount);
amount = +amount;
amount = Number(amount);


amount = amount.toString();
amount = String(amount);


amount = parseFloat(amount);


amount = Boolean(amount);


console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);