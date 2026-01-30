const isPalindrome_recursive = (s) => {
  if (s[0] !== s[s.length - 1]) return false;
  if (s.length <= 0) return true;
  else return isPalindrome_recursive(s.slice(1, -1));
};
console.log(isPalindrome_recursive("abcba"));
