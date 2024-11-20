Array.prototype.myFilter=function(callBack){
    let arr=this;
    let res;
    let newArray=[];
    arr.forEach((value,index)=>{
        if(callBack(value,arr,index)){
            newArray.push(value);
        }
    })
    return newArray
}
const callBack=(val,actArr,index)=>(val>=2);
let arr=[1,2,4];
console.log(arr.myFilter(callBack));