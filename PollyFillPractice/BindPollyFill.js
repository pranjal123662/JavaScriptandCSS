Function.prototype.myBind=function(context,...args1){
    context=context || globalThis;
    context.abc=this;
    console.log(this);
    
    return function(...args){
        return context.abc(...args1,...args)   
    }
}

function multiply(x,y){
    return x*y
}
const obj2 = {
    value: 10,
    getValue: function() {
      function inner() {
        return this.value;
      }
      return inner.myBind(this);
    }
  };
  
const res2 = obj2.getValue();
console.log(res2());
const res=multiply.myBind(this,2)
let h=res(3);
console.log(h);

const userName={
  name:"Pranjal",
  getName:function(){
    console.log(this.name);
  }
}

const userName2={
  name:"Himanshu"
}

const res3=userName.getName.myBind(userName2);
res3();

