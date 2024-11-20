Array.prototype.SpliceArray=function(startIndex,deleteCount,...array){
    let arr=this;
    for(let i=startIndex;i<startIndex+deleteCount;i++){
        delete arr[i]
    }
    arr[startIndex]=[array]
    return arr
}
let arr=[1,2,3,4,5]
arr.SpliceArray(0,2,3)
console.log(arr);
/* In the splice we have startIndex,deleteCount and list of elements which we want to push in the
array.
1. If startIndex is out of bound then we have to take the length of the array as startIndex.
2. If deleteCount is out of bound then we have to take the length of the array as deletecount.
3. In the splice the original array has been modified.
4. In the splice, method return the array of value which has been deleted.
5. If the startIndex is negative, then we have to generate the startIndex by subtracting with length of the 
original array,and if the count of the generated value is in negative after subtracting 
then we will consider the start value to be zero
6. If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
7. If the deletecount is negative, then we have to generate the deletcount by generating with length of the original array, and if the couunt of the generated value is greater than the length of the array then whole value starting from the start to end will be deleted..
*/

let arr1=[1,2,3,4];
arr1.splice(0,2,3,4,5);
console.log(arr1);

