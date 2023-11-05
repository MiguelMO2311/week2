 export class Person {

    public name: string;
    public age: number;
    private address: string;
    public currentYear: number;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    setAddress(address: string) {
        this.address = address;
    }
    getAdrress(): string {
        return this.address
    }

    printName(): string {
        return this.name;

    }
    yearOfBirth() {
        const currentYear = new Date().getFullYear();
        const yBirth = (currentYear - this.age)
        return yBirth;
    }


}
// const Person1 = new Person('Maria', 30, 'Pza. España 20 Madrid');

// console.log(Person1)
// console.log(Person1.printName())
// console.log(Person1.yearOfBirth())

