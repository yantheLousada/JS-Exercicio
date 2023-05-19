const n = 24;
function Check(n) {
  if (n % 2 !== 0) {
    return 'Weird';
  } else if (n % 2 === 0 || 2 < n < 5 || n > 20) {
    return 'Not Weird';
  } else if (n % 2 === 0 && 6 < n < 20) {
    return 'Weird';
  }
}
console.log(Check(n));
