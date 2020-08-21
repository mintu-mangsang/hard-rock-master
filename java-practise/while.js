// var num = 10;

// while (num <= 15) {
//     console.log(num);
//     num++;
// }


// tinyFriend function

function tinyFriend(s){
   var wordsArr = s[0];
  
    for (var i = 0; i < s.length; i++){
      var wordLength = s[i];
      if (wordLength < wordsArr){
        wordsArr = wordLength;
      }
    }
  
    return wordsArr;
  }

  var result = tinyFriend(['asad', 'kohinor', 'shahid', 'ma', 'asa', 'm']);
  console.log(result);