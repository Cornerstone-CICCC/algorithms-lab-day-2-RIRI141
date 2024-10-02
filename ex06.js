// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
  const queryString = url.split("?")[1];
  //　splitで?以降と分けたのち、配列の[1]である
  // search=test&page=2が代入される
  const pairs = queryString.split("&");
  const queryParams = {};

  for (let pair of pairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
    // studentScores["Alice"] = 85;
    // 文字で見るとわかりづらいけど例題はこう
    // {Alice: 85}
  }
  return queryParams;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
