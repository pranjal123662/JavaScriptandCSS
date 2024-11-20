let counter1=0
function CallAPI(value){
    ++counter1;
    console.log(`let them shoot now ${counter1}, ${value} `)
}

function throttling(fn,d){
    let flag=true;
    return function(...args){
        if(flag){
            fn.apply(this,args)
            flag=false;
            setTimeout(()=>{
                flag=true
            },d)
        }
    }
}

const shootingthrottling=throttling(CallAPI,3000) 