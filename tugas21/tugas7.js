let a = 8.3;
let c = "3.2";
let c_num = parseFloat(c);

console.log(`${a} + ${c_num} = ${(a + c_num).toFixed(1)}`);
console.log(`${a} - ${c_num} = ${(a - c_num).toFixed(1)}`);
console.log(`${a} x ${c_num} = ${(a * c_num).toFixed(2)}`); 
console.log(`${a} / ${c_num} = ${(a / c_num).toFixed(5)}`); 

let a_int = Math.floor(a);
let c_int = Math.floor(c_num);

console.log(`${a_int} % ${c_int} = ${a_int % c_int}`);