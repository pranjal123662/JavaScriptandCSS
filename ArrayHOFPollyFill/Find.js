Array.prototype.findArrayValue=function(callBack){
    let arr=this;
    for(let i=0;i<arr.length;i++){
        if(callBack(arr[i],i,arr)){
            return arr[i]
        }
    }
    return 'undefined'
}
let arr=[1,2,3,4,5]
const callBack=((value,index,arr)=>value>7);
let foundvalue=arr.find(callBack);
console.log(foundvalue);
/*The find() method of Array instances returns the first element in the provided array that 
satisfies the provided testing function. If no values satisfy the testing function, 
undefined is returned.*/
/*Real protoType Function*/
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);