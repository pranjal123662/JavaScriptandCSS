Array.prototype.sliceArray=function(startIndex,EndIndex){
    let arr=this;
    let res=[]
    for(let i=startIndex;i<EndIndex;i++){
        res.push(arr[i])
    }
    return res;
}
let arr=[1,2,3,4,5];
let res=arr.slice(2,4);
console.log(res);
