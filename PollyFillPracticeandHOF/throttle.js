let counter=0
function calculate(){
    counter=counter+1
    console.log("calculate",counter)

}
function debounce(func, wait) {
    let timer;
    return function(...args){
      clearTimeout(timer);
      timer=setTimeout(()=>{
        func.apply(this,args);
      },wait)
    }
  }
const realvalue=debounce(calculate,400)
