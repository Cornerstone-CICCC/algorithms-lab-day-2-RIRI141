// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

// 文字列を受け取り、＠と.の位置を確認
// indexOfで文字列または配列に特定の値が含まれるか検索できる
function validateEmail(email) {
  const atIndex = email.indexOf("@");
  const dotIndex = email.indexOf(".");

  if (atIndex === -1 || dotIndex === -1) {
    return false;
  }

  if (atIndex === 0) {
    return false;
  }

  if (dotIndex === email.length - 1) {
    return false;
  }

  if (dotIndex < atIndex) {
    return false;
  }
  return true;
}

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false
