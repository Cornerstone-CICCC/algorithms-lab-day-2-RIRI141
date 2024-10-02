// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

// 配列の中身を比較
// 比較して１にあって２にないものを出力する

const arrayDifference = function (array1, array2) {
  //   return array1.filter((element) => !array2.includes(element));
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }
  return result;
};

console.log(arrayDifference([1, 2, 4], [2, 3, 4])); // Expected output: [1]
