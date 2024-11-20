Array.prototype.SomeArray=function(callBack){
    let arr=this;
    for(let i=0;i<arr.length;i++){
        if(callBack(arr[i],i,arr)){
            return true
        }
    }
    return false
}
let arr=[1,3,3,5,5]
const callbackFn=((value)=>value%2==0);
let res=arr.SomeArray(callbackFn);
console.log(res);
/*The some() method of Array instances tests whether at least one element in the 
array passes the test implemented by the provided function. It returns true if, 
in the array, it finds an element for which the provided function returns true; 
otherwise it returns false. It doesn't modify the array.*/