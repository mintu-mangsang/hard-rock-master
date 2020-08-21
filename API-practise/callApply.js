
const normalPerson = {
    firstName: 'Rahima',
    lastName: 'Khatun',
    salary: '20000',
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function(amount, vat, tax){
        console.log(this);
        this.salary = this.salary - amount - vat - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Jamal',
    lastName: 'Khan',
    salary: 30000
}
const villenPerson = {
    firstName: 'Ramal',
    lastName: 'Khan',
    salary: 50000
}
// normalPerson.chargeBill();
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(1000);
// heroBillCharge(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 1000, 2000, 3000);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [2000, 1000, 200]);
normalPerson.chargeBill.apply(villenPerson, [1000, 3000, 1000]);
console.log(heroPerson.salary);
console.log(villenPerson.salary);
