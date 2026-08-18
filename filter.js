let arr = [1,5,8,4,7,12,6];

arr = arr.filter((ele)=>{
    if(ele%2==0)
        return true;
    else 
        return false;
});
console.log(arr);