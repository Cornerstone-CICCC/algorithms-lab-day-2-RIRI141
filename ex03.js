// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

// 配列の最小と最大を決定する。
// 最小から順にループしていき、配列に含まれていない数字がある場合、それを出力する。
// 配列が完璧な場合、文字列を返す。

function findMissingNumber(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);

  for (let i = min; i <= max; i++) {
    if (!array.includes(i)) {
      return i;
    }
  }
  return "COMPLETE";
}

console.log(findMissingNumber([1, 2, 3, 4, 5])); // Expected output: 3
