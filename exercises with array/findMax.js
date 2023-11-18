function findMax(arr) {
    while (arr.length > 1) {
        return arr.filter((i, num) => {
            if (num > arr[i]) {
                return num
            }
        }, 1)
    }
}

console.log(findMax([1,12,23,2,3,45,123,2,3,4,15,234,1000,2,1,4,5]))