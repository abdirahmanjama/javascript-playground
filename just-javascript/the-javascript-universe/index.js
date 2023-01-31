console.log(2);
console.log("hello");
console.log(undefined);

console.log(typeof ([1, 2, 3].map(x => x % 2 == 0)))


function validDate(date) {
    if (typeof date === 'date') {
        return 'Valid date'
    }
    throw Error('Invalid date')
}


console.log(validDate(1212))