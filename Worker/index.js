const worker=new Worker("worker.js")
let count=4;
document.getElementById("btn").addEventListener("click",()=>{
    if(document.body.style.backgroundColor!="green"){
        document.body.style.backgroundColor="green"
    }else{
        document.body.style.backgroundColor="black"
    }
    
})
worker.onmessage=function(message){
    console.log(message);
    
}
document.getElementById("cal").addEventListener("click",()=>{
    worker.postMessage("hello");
})