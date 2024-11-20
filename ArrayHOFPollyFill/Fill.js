/*custom implementation of the Fill prototype*/
Array.prototype.fill=function(value,startIndex,lastIndex){
    let arr=this;/*In the Array.prototype.fill method you implemented, the arr variable is a reference 
    to the array on which the method is called. By using let arr = this, you are assigning 
    this (which represents the array that the method is acting upon) to the arr variable. 
    This allows you to modify the original array in the method.*/
    if(typeof startIndex!='undefined' && typeof lastIndex!='undefined'){
        for(let i=startIndex;i<lastIndex;i++){
            arr[i]=value
        }
    }else if(typeof lastIndex=='undefined' && typeof startIndex!='undefined'){
        for(let i=startIndex;i<arr.length;i++){
            arr[i]=value
        }
    }else{
        for(let i=0;i<arr.length;i++){
            arr[i]=value
        }
    }
    return arr;
}
arr=[1,2,3,4,5]
console.log(arr.fill(3,2))/*Here, arr is the array that invokes the fill method, so this inside your fill function refers to arr. 
This is why you don't see an explicit array argument.*/
/* Real implementation of the Fill ProtoType*/
/* In the fill protoType we have to give the value to the fill ProtoType function where we 
have give the value which is going to replace value in the startIndex and lastIndex
fill(value)
fill(value, start)
fill(value, start, end)
if start is undefined and end is undefined we are taking start=0 and end=arr.length
if start has value and end is undefined we are taking start=value and end=arr.length
if start has value and end has value then we taking start=value and end=value
if start or end has a negative value then we have to pretend the array as circular array.
*/