function canNest(arr1, arr2) {
	var arr1Min = Math.min(...arr1); 
  var arr1Max = Math.max(...arr1); 
  var arr2Min = Math.min(...arr2); 
  var arr2Max = Math.max(...arr2);  
  return arr1Min > arr2Min && arr1Max < arr2Max;
}