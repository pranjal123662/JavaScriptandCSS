function selection(arr){
    for(let i=0;i<arr.length;i++){
        let temp;
        let mini=i
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[mini]){
                mini=j;
            }
        }
        temp=arr[i];
        arr[i]=arr[mini]
        arr[mini]=temp
    }
    return arr
}

console.log(selection([4,6,2,1,3]))