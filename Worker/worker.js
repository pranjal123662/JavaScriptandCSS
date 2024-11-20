self.onmessage=function(message){
    let sum=0;
    for(i=0;i<100000000000;i++){
        sum=sum+i
    }
    self.postMessage(sum)
    
}