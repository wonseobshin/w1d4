var myarray=[7, 40, 300, 2, 52];

var arr = [];

// arr = myarray.sort(function(a, b){
//   return a - b;
// })

arr = myarray.sort((a, b) => a - b);


console.log(arr);