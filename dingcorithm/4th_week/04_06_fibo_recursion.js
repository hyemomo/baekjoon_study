let input = 100;

function fiboRecursion(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fiboRecursion(n - 1) + fiboRecursion(n - 2);
}

// Main execution
input = 20; // Using 20 instead of 100 for reasonable execution time
console.log(fiboRecursion(input)); // 6765
