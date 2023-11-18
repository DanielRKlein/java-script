function filterLength(arr) {
    return arr.filter((word) => {
        if (word.length <= 5) {
            return word;
        }
    })
}

console.log(filterLength(["this", "word", "aaaaaaaaaaaaaa", "heres"]))