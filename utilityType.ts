// Partial: change all properties to be optional
interface Point {
    x: number;
    y: number
}

let pointPart: Partial<Point> = {} // x, y optional


// Required: change all properties to be required
interface Car {
    model: string,
    mileage?: number,
}

let myCar: Required<Car> = {
    model: 'Focus',
    mileage: 12000,
}

// Record: key, value type of an object
const nameAge: Record<string, number> = {
    'John': 20,
    'Rose': 18,
}

// Omit: remove keys from an object type
interface PersonOmit {
    name: string,
    age: number
    location: string
}

const personOmit: Omit<PersonOmit, 'age' | 'location'> = {
    name: "John", // remove age, location
}

// Pick: remove all, except property pick
const personPick : Pick<PersonOmit, 'age'> = {
    age: 20,
}


// Exclude: remove type of union type
type primitiveType = string | number | boolean
const value: Exclude<primitiveType, string> = 10
// remove type string => string can not used 
