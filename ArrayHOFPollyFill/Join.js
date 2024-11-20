Array.prototype.JoinArray=function(delimeter){
    let arr=this;
    if(delimeter==undefined){
        delimeter=","
    }
    let newString=''
    for(let i=0;i<arr.length;i++){
        let elemString=(arr[i]==null || arr[i]==undefined)?'':arr[i].toString();
        newString+=elemString;
        if(i<arr.length-1){
            newString+=delimeter;
        }
    }
    return newString;
}
let arr=[1,2,3,4,5,6]
let res=arr.JoinArray('rand');
console.log(res)
/* */