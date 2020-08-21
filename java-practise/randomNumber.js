

// var num = 2.1333
// var result = Math.floor(num); // Math.floor means number should be change point something like .5 er niche count hobe abong float to int hoye jabe
// var result2 = Math.ceil(num); // Math.ceil means number should be change point something like .5 er upore count hobe  abong float to int hoye jabe
// var result3 = Math.round(num); // Math.round means -- if number 2.499 then count 2 & if 2.50 then count 3 
// var randomNum = (Math.random() * 1000) + 1;
// var randResult = Math.round(randomNum);
// console.log(randResult);
// // console.log(result, result2)

// Rendom digit generate part
const generateBtn = document.getElementById('pin-generate');
const generatedPin = document.getElementById('show-pin');
const submitBtn = document.getElementById('submit-btn');

generateBtn.addEventListener('click', function () {
  generatedPin.value = randomRange(1000, 9999);
  submitBtn.disabled = false;
  submitBtn.style.backgroundColor = '#495bc3';
  resetStage();
});

function randomNumber( minNum, maxNum){
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + 1000;
}