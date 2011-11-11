require('./array+clean');

var json = JSON.stringify;

var arr = [null, null, 2, null, 4, 5, 0];
console.log(arr, json(arr));

arr1 = arr.clean();
arr2 = arr.clean(true);

console.log(arr1, json(arr1));
console.log(arr2, json(arr2));
