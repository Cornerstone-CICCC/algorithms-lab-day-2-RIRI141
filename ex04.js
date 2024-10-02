// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

// 文字列を文字ごとに分解する
// その文字が何回出てきたかをカウントする
// カウントして一番出てきた文字を出力する
function mostFrequentChar(str) {
  charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }
  let maxChar = "";
  let maxCount = 0;

  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(mostFrequentChar("javascript")); // Expected output: "a"
