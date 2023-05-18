function reverseArray(arr) {
  var reversedArr = arr.reverse();
  var result = reversedArr.join(' ');
  return result;
}
var N = 4;
var A = [1, 4, 3, 2];
var reversedString = reverseArray(A);
console.log(reversedString);
