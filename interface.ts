interface IPerson {
    name: string;
    age: number;
}

function hiLog(person: IPerson) {
    console.log(`Hi ${person.name}`);
}
hiLog({ name: "John", age: 18, address: "VN"})

// Extending an interface
interface ICow {
    name: string;
    tail: number;
}

interface IAnimal extends ICow {
    animal: boolean;
}

const pig: IAnimal = {
    name: "Poo",
    tail: 2,
    animal: true
}

// Adding new fields to existing interface: 
interface IPerson {
    address: string;
}

const userPerson: IPerson = {
    name: "Rose",
    age: 18,
    address: "Korea"
}

// sử dụng toán tử ? cho property optional
interface Dog {
    name: string;
    tail?: number;
}
const dog = {
    name: "Yellow",
}

// thuộc tính readonly
interface Cat {
    readonly name: string;
    animal: boolean;
}

const cat: Cat = {
    name: "Kitty",
    animal: true,
}
