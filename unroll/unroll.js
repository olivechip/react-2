function unroll(squareArray) {
    const n = squareArray.length;
    const values = [];
    let startRow = 0, endRow = n - 1;
    let startCol = 0, endCol = n - 1;

    while (startRow <= endRow && startCol <= endCol){
        for (let col = startCol; col <= endCol; col++) {
            values.push(squareArray[startRow][col]);
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            values.push(squareArray[row][endCol]);
        }
        endCol--;

        if (startRow <= endRow){
            for (let col = endCol; col >= startCol; col--) {
                values.push(squareArray[endRow][col]);
            }
            endRow--;
        }
        if (startCol <= endCol){
            for (let row = endRow; row >= startRow; row--) {
                values.push(squareArray[row][startCol]);
            }
            startCol++;
        }
    }
    return values;
}
    
module.exports = unroll;