//Object Literal
// let person={
//     firstName: "Shivam",
//     lastName: "Srivastava",

//     getFullName: function(){
//         return `The name of the person is ${person.firstName} ${person.lastName}`;
//     },

//     phoneNumber:{
//         mobile: "123456",
//         landline: "67891",
//     },
// };

// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);


//Object Constructor
// function person(firstName, lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
// }
// let person1=new person("Shivam", "Srivastava");
// let person2=new person("Anurag", "Mishra");

// console.log(person1.firstName);
// console.log(`${person1.firstName} ${person2.lastName}`);


// const coder={
//     isStudying: false,
//     printIntroduction: function(){
//         console.log(`My name is ${this.name}. Am I Studying?: ${this.isStudying}`);
//     },
// };
// const me = Object.create(coder);
// me.name="Shivam Srivastava"
// me.isStudying = true;
// me.printIntroduction();


// class Vehicle{
//     constructor(name, maker, engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }
//     getDetails(){
//         return `The name of the vehicle is ${this.name}`;
//     }
// }
// let v1=new Vehicle("Nexa", "Hyundai", "2500cc");
// let v2=new Vehicle("Punch", "Tata", "1500cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());


// function Vehicle(name, maker, engine){
//     this.name=name;
//     this.maker=maker;
//     this.engine=engine;
// }
// Vehicle.prototype.getDetails=function(){
//     return `The name of the car is ${this.name}`;
// };
// let v1=new Vehicle("Nexa", "Hyundai", "2500cc");
// let v2=new Vehicle("Punch", "Tata", "1000cc");
// console.log(v2.name);
// console.log(v2.maker);
// console.log(v1.getDetails());


// class Person{
//     constructor(name, id){
//         this.name=name;
//         this.id=id;
//     }
//     addAddress(newAddress){
//         this.address=newAddress;
//     }
//     getDetails(){
//         console.log(`Name is ${this.name}, and address is: ${this.address}`);
//     }

// }
// let person1=new Person("Shivam", 23);
// person1.addAddress("Varanasi");
// person1.getDetails();



class Person{
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getDetails=function(){
        return `First name is ${this.firstName} and last name is ${this.lastName}`;
    };
}
class Student extends Person{
    constructor(firstName, lastName, rollNumber){
        super(firstName, lastName);
        this.rollNumber=rollNumber;
    }
    getDetails=function(){
        return `First name is ${this.firstName} and the last name is ${this.lastName}and the roll number is ${this.rollNumber}`;
    };
}
let person1 = new Person("Shivam", "Srivastava");
console.log(person1.firstName);
console.log(person1.getDetails());
let student1 = new Student("Ankush","Mishra",21);
console.log(student1.getDetails());

