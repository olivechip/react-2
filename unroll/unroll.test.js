const unroll = require("./unroll");

const squareArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
});

describe("test a square matrix of integers", () => {
  it("should return an empty array for an empty matrix", () => {
    expect(unroll([])).toEqual([]);
  });
  it("should return a single-element array for a 1x1 matrix", () => {
    expect(unroll([[1]])).toEqual([1]);
  });
  it("should have the total number of units in the final array", () => {
    const unrolled = unroll(squareArray);
    const expectedLength = squareArray.length * squareArray[0].length;
    expect(unrolled.length).toEqual(expectedLength);
  });
  it("should return the final array correctly", () => {
    expect(unroll(squareArray)).toEqual([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]);
  });
})





