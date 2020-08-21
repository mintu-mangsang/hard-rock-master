var a = 5;
var b = 7;
console.log("Before swap the Value a =", a, "b =", b);
var temp = a;
a = b;
b = temp;
console.log("After swap the Value a =", a, "b =", b);



// Javascript Special technic solve this swap issue 

var p = 5;
var q = 7;

[p, q] = [q, p]
console.log("After swap the Value p =", p, "q =", q);
