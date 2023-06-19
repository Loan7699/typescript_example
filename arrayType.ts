let arrayNumber: number[] = [1, 2, 3]

let arrayStr: string[] = ['1', '2', '3']
arrayStr.push('4')
console.log(arrayStr);
// arrayStr.push(5) => lỗi do type arrayStr là mảng các string

let arrayMix: (string | number)[] = [1, '1']

// tuple type: type, order, size
let arrayT: [string, number, boolean] = ['English', 5, true]

// arrayT = ['text', false, 1] => lỗi do type chưa đúng order
// arrayT = ['text', 1] => lỗi do ko đủ type khai báo

// optional?: tham số cuối arrays
let arrayOptional: [string, number?] = ['text']