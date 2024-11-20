
let counter=0;
function getSuggestion(value1,value2){
    ++counter;
    console.log("Switch kar le chutiye",counter);
}
const getActualCall=(fn,d)=>{
    let timer;
    return function(...args){
        const context=this;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.apply(context,args);
        },d)
        console.log(timer);
        
    }
}
const getCall=getActualCall(getSuggestion,300)

