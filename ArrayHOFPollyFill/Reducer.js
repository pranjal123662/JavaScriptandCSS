Array.prototype.reducerArray=function(callBack,initialValue){
    let arr=this;
    let accumalator;
    let startIndex;
    if(initialValue!=undefined){
        accumalator=initialValue
        startIndex=0
    }else{
        accumalator=arr[0]
        startIndex=1
    }
    for(let i=0;i<arr.length;i++){
        accumalator=callBack(accumalator,arr[i],i,arr)
    }
    return accumalator;
}
let arr=[1,2,3,4,5]
const callBack=((accumalator,currentValue)=>{return accumalator*currentValue})
let res=arr.reduce(callBack,1)
console.log(res);
/*The reduce() method of Array instances executes a user-supplied "reducer" callback 
function on each element of the array, in order, passing in the return value from the 
calculation on the preceding element. The final result of running the reducer across all elements 
of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is 
used as the initial value and iteration starts from the next element (index 1 instead of index 0).

accumulator
The value resulting from the previous call to callbackFn. On the first call, 
its value is initialValue if the latter is specified; otherwise its value is array[0].

currentValue
The value of the current element. On the first call, its value is array[0] if 
initialValue is specified; otherwise its value is array[1].

currentIndex
The index position of currentValue in the array. On the first call, 
its value is 0 if initialValue is specified, otherwise 1.*/

let arr1=[2,3,4,5,2,3]
const res1=arr1.reduce((accumalator,num)=>accumalator*num)
console.log(res1);
