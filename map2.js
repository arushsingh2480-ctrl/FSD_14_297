function twice(ele){
    console.log(2*ele)
}
function add10(ele){
    console.log(ele+10)
}
function square(ele){
    console.log(ele*ele)
}
let arr = [1,3,5,6,7];
console.log(arr);


let brr = arr.map;
console.log(brr);

let crr = arr.map(function(ele){
    return ele+10;
});
console.log(brr);

arr = arr.map((ele)=>{
    return ele/10;
});
console.log(arr);

arr=arr.map(ele => ele*2);
console.log(arr);