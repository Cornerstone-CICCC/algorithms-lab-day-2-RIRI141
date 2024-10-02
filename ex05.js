// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

// 文字列に含まれている子音の数を数える
// a,i,u,e,o以外の数、string convert to array, loopさせたいから
// もしa,i,u,e,oに該当した場合、カウントしない
// それ以外の時はカウントの値を１増やす

function countConsonants(str) {
  let totalCount = 0;
  const vowel = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (char >= "a" && char <= "z" && !vowel.includes(char)) {
      totalCount += 1;
    }
  }
  return totalCount;
}
console.log(countConsonants("hello world")); // Expected output: 7
