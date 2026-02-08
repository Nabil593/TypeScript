var called:string = 'Setup';

var num1:number = 12;
var num2:number = 14;
var sum:number = num1 + num2;


var otc:number = 0o100001;
var binary:number = 0b10101;
var hex:number = 0x00001;

var item1:number = 10;
var item2 = '20';
// var item2Converted = Number(item2);
// var item2Converted =+ item2; //this is a shortcut to convert a string to a number, it is called unary plus oparetor.
var itemSum = item1+ +item2; // Also shortcut mathod
console.log(itemSum);


var data: number | string = 30; // multi data type  added in variable.
data = 'Nabil'