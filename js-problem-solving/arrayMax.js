var marks = [33, 40, 23, 99, 89, 70, 95];
var max = marks[0];
for( var i = 0; i < marks.length; i++){
    var elements = marks[i];
    if( elements > max){
        max = elements;
    }
}
console.log("The Highest number is: ", max);