function explain_callback(name, age, task){
    console.log('Hello Mr.', name);
    console.log('Your Age', age);
    task();
}

function experience(){
    console.log('Working 2 years');
}
function nonExperience(){
    console.log('You are fresher');
}
explain_callback('Jalim Uddim', 11, nonExperience);
explain_callback('Halima Khatun', 30, experience);