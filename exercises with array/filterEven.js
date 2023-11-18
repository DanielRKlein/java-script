function filterEven(arr) {
    return arr.filter((num) => {
        if (num % 2 === 0) {
            return num
        }
    })
}

console.log(filterEven([1,2,3,4,5,6]))