Array.prototype.myReduce=function(callBack,initialValue){
    let arr=this;
    let startIndex;
    let accumalator;
    if(initialValue){
        accumalator=initialValue;
        startIndex=0

    }else{
        accumalator=arr[0]
        startIndex=1
    }
    for(let i=startIndex;i<arr.length;i++){
        
        accumalator=callBack(accumalator,arr[i]);
        
    }
    return accumalator

}
function callBack(accumalator,value){
    
    return accumalator+value

}
let arr1=[2,3,4,5,6]
console.log(arr1.myReduce(callBack,2));
