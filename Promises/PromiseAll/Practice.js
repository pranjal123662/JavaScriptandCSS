let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved")
    },1000)
})

let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 resolved")
    },500)
})

let p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise 3 rejected")
    },2000)
});

const data=Promise.all([p1,p2,p3])
data
.then((response)=>{console.log(response)})
.catch((err)=>{console.log(err);
})
 /* In the Promise.all we get the settled promises if all the promises will resolve then only we 
 receive the array of all the resolve promises, but if any of the promises will get reject then only we get 
  then it will return an error(it means the reject messages that we have give)*/