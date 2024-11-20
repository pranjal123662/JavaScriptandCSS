Array.prototype.filterArray=function(callback){
    let arr=this;
    let newArray=[]
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            newArray.push(arr[i])
        }
    }
    return newArray;
}
let arr=[2,3,4,5,6];
const callBackFunction=(value)=>value<6;
let newlyArray=arr.filterArray(callBackFunction);
console.log(newlyArray);
/*The filter() method of Array instances creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the 
provided function.
In the callBack Function we strictly allowed the current value parameter and there are also two options which is not mandatory first is index and then current array where filter is called Upon*/
/*Real ProtoType Filter Function*/
function isBigEnough(value) {
    return value >= 10;
  }
  
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
  
