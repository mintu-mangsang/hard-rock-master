
// 10! = 1*2*3*4*5*6*7*8*9*10

var i = 0;
var factorial = 1;

for ( var i = 1; i <= 10; i++ ){
    factorial = factorial * i;
    console.log(i, factorial);
}