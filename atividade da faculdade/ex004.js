function rowsOfMultiplies(rowSize, colSize) {
    const matrix = [];
    for (let multiplier = 2; multiplier < (colSize + 2); multiplier++)
    {
        const line = [];
        for (let base = 1; base < rowSize + 1; base++) {
            line.push(base * multiplier);
        }
        matrix.push(line);
    }
    return matrix;
}

console.log(rowsOfMultiplies(5,4))

