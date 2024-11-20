function throttle(func, wait) {
    let flag=true;
    let lastargs;
    return function(...args){
     console.log(args)
     if(flag){
       func.apply(this,args)
       flag=false;
       setTimeout(()=>{
         flag=true
         func.apply(this,lastargs,wait)
       },wait)
     }else{
        lastargs=args
     }
    }
 }
let currentTime = 0
const run = (input) => {
  currentTime = 0
  const calls = []
  const func = (arg) => {
    console.log("arg",arg);
    
     calls.push(`${arg}@${currentTime}`)
     console.log(calls)
  }
  const throttled = throttle(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => throttled(arg), time)
  })
  return calls
}
let res=run(['A@0', 'B@2', 'C@3'])
console.log("res",res);

