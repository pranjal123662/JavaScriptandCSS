function flatten(arr,depth=1){
    result=[]
    let depth=depth=="Infinity"?length(arr):depth
    for(i=0;i<depth;i++){
        if(a[i].isArray()){
            
        }else{
           result.push(a[i])
        }
    }

}
arr=[1,2,[3,4,5],6,[7,8]]
depth=Infinity
console.log(flatten(arr,depth))