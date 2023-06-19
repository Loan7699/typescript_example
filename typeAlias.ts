// đặt tên cho kiểu DL
type numStrType = string | number | boolean
function addNumberOrString (a: numStrType , b: number | string) {
    if ( typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if ( typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Paramters is not supported')
}

console.log(addNumberOrString("Phuong", " Loan"));
console.log(addNumberOrString(1, 2));



type User = {
    name: string,
    id: numStrType
}

const user1 = {
    name: "Phuong",
    id: 1,
}

const user2 = {
    name: "Loan",
    id: 2,
}

const sayHello = (a: User) => {
    console.log(`Hi ${a.name}`);
}

sayHello({
    name: "Hung",
    id: 3,
})

// Extends type Aliases: &
type Animals = {
    name: string,
}
type Bear = Animals & {
    honey: boolean,
}
const bear: Bear = {
    name: 'Winnie',
    honey: true
}

// Cannot adding field to existing type alias
type Animal = {
    name: string,
}
type Animal = {
    tail: number
}
// lỗi duplicate Animal

const cow: Animal = {
    name: "Bo",
}
console.log(cow);