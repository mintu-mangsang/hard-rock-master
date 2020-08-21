
class person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person('hero', 'alam', 20000);
const villianPerson = new person('hero', 'jalim', 30000);
console.log(heroPerson);
console.log(villianPerson);

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('abul', 'kabul', 10000);
console.log(oldPerson);