/* This is the first approach*/
function entries(arr){
  let index=0
  return {next:function(){
    if(index<arr.length){
        return {value:[index,arr[index++]],done:"false"}
    }else{
        return {value:undefined,done:"true"}
    }
  }}
}
let arr=[1,2,3,4,5];
let iterator=entries(arr)
console.log(iterator.next(arr));
console.log(iterator.next(arr));
console.log(iterator.next(arr));
console.log(iterator.next(arr));
console.log(iterator.next(arr));
console.log(iterator.next(arr));
/*Second Approach Using symbol.iterator 
Symbol.iterator is a well-known symbol in JavaScript. It's a special symbol that is used to define
a default iterator for an object.
When an object has a [Symbol.iterator] method, it tells JavaScript that this object can be 
iterated over, for example, in a for...of loop or using other iteration mechanisms like the 
spread operator (...), Array.from(), and more.
In simple terms, this symbol is what allows an object to be iterable.

Why we returning this?
The method body simply returns this. This means that the object on which this method is 
defined is its own iterator.
In other words, calling Symbol.iterator on this object will return the object itself, 
allowing it to handle its own iteration through the next() method defined elsewhere in the object.
By returning this, we are telling JavaScript that the current object (which already has a next() 
method) is the iterator.*/
function entriesArray(arr){
    let index=0 
    return {
        [Symbol.iterator]() {
            return this;
        },
        next:function(){
            if(index<arr.length){
                return {value:[index,arr[index++]],done:false}
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}
let iteratorofArray=entriesArray(arr);
for( [index,value] of iteratorofArray){
    console.log(index,value)
}
