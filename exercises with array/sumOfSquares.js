function  sum(arr) {
    return arr.reduce((num, sum) => {
        return sum + Math.pow(num, 2)
    }, 0)
}
console.log(sum([4,10,2]))

