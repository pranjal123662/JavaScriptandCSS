Array.prototype.findLast=function(callBack){
    let arr=this;
    for(let i=arr.length-1;i>-1;i--){
        if(callBack(arr[i])){
            return arr[i]
        }
    }
    return undefined
}
let arr=[1,2,3,4,5,6]
const callBackFunction=((value)=>value==6)
let findValue=arr.findLast(callBackFunction);
console.log(findValue);
/*The findLast() method of Array instances iterates the array in reverse order and returns the 
value of the first element that satisfies the provided testing function. If no elements satisfy 
the testing function, undefined is returned.*/