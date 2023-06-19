let obj1: object
obj1 = { text: 'message'}
// obj1 = '1', lỗi do khai báo type object obj1

let person: {
    name: string;
    age: number;
}

person = {
    name: 'Phuong Loan',
    age: 24,
}

// person.address = "HN" => lỗi do person ko có khai báo thuộc tính address

// s/d interface
interface Person {
    name: string;
    age: number;
}

let person1: Person = {
    name: "Phuong Loan",
    age: 24,
}


// s/d type alias
type PersonAlias = {
    name: string;
    gender: string;
}

let person2: PersonAlias = {
    name: 'Phuong Loan',
    gender: "Female"
}