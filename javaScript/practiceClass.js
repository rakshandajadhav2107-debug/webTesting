

export class Person{
constructor(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}
    fullname(){
        return this.firstName+ ' ' +this.lastName+ ' '+this.age
        
    }

    getlocation(){
        return "Pune"
    }
}

let person = new Person('Shivaji', 'Pande', 34);
console.log(person.fullname());

console.log(person.getlocation());
console.log(person.lastName);

let person3 = new Person('Ritest', 'Deshmukh', 21);
console.log(person3.fullname());