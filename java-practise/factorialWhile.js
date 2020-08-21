
function factorials( n ){
    var i =1;
    var factorial = 1;

    while ( i <= n) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

var result = factorials(4);
console.log(result);