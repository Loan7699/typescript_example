const arrayGeneric = <T>(x: T) => [x]
console.log(arrayGeneric('string'));
console.log(arrayGeneric(1));


const array2 = <B, C>(x: B, y: C) => [x, y]
console.log(array2(1, 2));
console.log(array2(1, '1'));

// obj nhận bất kì type
const addId = <T>(obj: T) => {
    let id = Math.floor(Math.random() * 10)
    return {...obj, id}
}
console.log(addId({ name: 'John', age: 18 }));

const personId = addId('Sally') // truyền vào 1 string
// lỗi khi truy cập vào thuộc tính name
console.log(personId.id);
// console.log(personId.name); // ERROR

// Generic Extends
// báo lỗi khi truyền string => extends
const addId1 = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 10)
    return { ...obj, id}
}
// console.log(addId1('Sally')) // ERROR: Argument of type 'string' is not assignable to parameter of type 'object'

// pass array => no problem, but accessing property name => ERROR => đối số phải có thuộc tính name dạng string
const sally = (addId1(['Sally', 26]));
// console.log(sally.name);
const addId2 = <T extends { name: string}>(obj: T) => {
    let id = Math.floor(Math.random() * 10)
    return { ...obj, id}
}
// console.log(addId2(['Sally', 26]));
console.log(addId(<{ name: string, age: number }>({ name: "John", age: 20 })));

// use generic than any type when function accept multiple types
function logLength(a: any) {
    console.log(a.length); // no error
    return a
}
logLength("Heelloo") // 7
logLength(3) // undefined // no ERROR

// use generic alternative this case
function logLengthT<T>(a: T) {
    // console.log(a.length); // ERROR: Property 'length' does not exist on type 'T'.
    return a
}

// Solution: use generic extends interface to agrument has length
interface hasLength {
    length: number;
}
function logLengthEx<T extends hasLength>(a: T) {
    console.log(a.length);
}
logLengthEx("message")
// logLengthEx(18) // ERROR

// agrument: a array string
function logLengthArr<T extends hasLength>(a: T[]) {
    a.forEach(element => {
        console.log(element.length);
    })
}
logLengthArr(['This is a dog', 'This is a elephant', 'This is a bear'])

// generic with interface: when unknowning type value of object
interface Person<T> {
    name: string;
    age: number;
    document: T;
}

// document nhận type array, string
const person1: Person<string[]> = {
    name: 'John',
    age: 20, 
    document: ['a', 'b']
}

const person2: Person<string> = {
    name: 'John',
    age: 20,
    document: 'a'
}