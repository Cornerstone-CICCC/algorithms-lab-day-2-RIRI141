// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

// 文字を半角スペースで分割する
// 分割した単語の先頭の頭文字を[0]を大文字に
// 残りの文字をくっつける
// 分割した文字を半角スぺを基準にくっつける

const capitalizeWords = function (str) {
  let splitting = str.split(" ");
  //   let capitalizedWords = splitting.map(function (word) {
  //     return word[0].toUpperCase() + word.slice(1);
  //   });
  let capitalizedWords = splitting.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
