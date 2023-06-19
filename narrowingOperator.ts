// 'in' operator => check property exist in a object
type Circle = {
    radius: number;
}

type Rectangle = {
    width: number;
    height: number;
}

function calculate(shape: Circle | Rectangle) {
    if ('radius' in shape) {
        console.log('Cirle' + 3.14 * shape.radius * shape.radius);
    }

    if ('width' in shape && 'height' in shape) {
        console.log('Rectangle' + shape.width * shape.height);
        // console.log(shape.radius); // ERROR
    }
}


// intanceof operator
function dateToString(value: string | Date) {
    if (value instanceof Date) {
        return value.toISOString()
    }
    return value;
}