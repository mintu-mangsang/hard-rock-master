
// var fibonacci = [ 0, 1];

// fibonacci[2] = fibonacci[2-1] + fibonacci[2-2];
// fibonacci[3] = fibonacci[3-1] + fibonacci[3-2];
// fibonacci[4] = fibonacci[4-1] + fibonacci[4-2];
// fibonacci[5] = fibonacci[5-1] + fibonacci[5-2];

function fibonacci(n){
    var fibo = [ 0, 1];
    for ( var i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;   
}

var result = fibonacci(9)
console.log(result);