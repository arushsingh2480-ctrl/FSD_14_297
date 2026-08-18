let arr = [6,-8,-9,10]

arr = arr.sort((a,b)=>a-b);
console.log(arr);

arr=arr.sort((a,b)=>Math.abs(a)-Math.abs(b));
console.log(arr); 