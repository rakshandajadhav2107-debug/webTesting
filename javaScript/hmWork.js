//wap to print factorial 5
// 1*2*3*4*5 = 120

const { count } = require("node:console");

//const { count } = require("node:console");

/*let sum = 0;
for(let i=1; i<=5; i++) {
    sum = sum + i;
}
console.log('Sum of first 5 numbers is: ' + sum);


let multi = 1;
for(let i=1; i<=5; i++){
    multi = multi*i;
}
console.log('factorial 5 is : ' + multi);

let a= 2;
let b= 3;
let Addition = a+b
console.log(Addition);

let Substraction = b-a
console.log(Substraction);

let Mul = a*b;
*/


//var marks = [30, 80, 90, 70];

//var marks = [30, 80, 90, 70, 50, 20]
//console.log(marks);
//marks[0]= 100;
/*console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);*/
//console.log(marks.length);

//console.log(marks.indexOf(80));

//console.log(marks.slice(2, 5));

//marks.push(35,25);
//console.log(marks);

//marks.unshift(78);

//console.log(marks);

//marks.pop();
//console.log(marks);

//marks.shift();
//console.log(marks);

let counts = [20, 90, 98, 30];

let countadd = counts.reduce((sum, count)=> sum + count, 0);
console.log(countadd);
let countsub = counts.reduce((Substraction, count)=> Substraction - count, 0);
console.log(countsub);

let countdiv = counts.reduce((division, count)=>division/count, 1 );
console.log(countdiv);



let countmulti = counts.reduce((multi, count )=> multi * count, 1);
console.log(countmulti);

let countby2 = counts.filter(count=>count%2 ==0);
console.log(countby2);


//wap to print factorial 5
// 1*2*3*4*5 = 120

let values = [];