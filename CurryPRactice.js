const curryPractice=(a,b,c)=>{
    return a*b*c;
}

const curry=(fn)=>{
    return function curryFunction(...args){
        if(args.length>=fn.length){
            return fn(...args)
        }else{
            return function(...next){
                return curryFunction(...args,...next);
            }
        }
    }

}
const curriedJoin=curry(curryPractice)
let h=curriedJoin(2)(3)(4);
console.log(h);

