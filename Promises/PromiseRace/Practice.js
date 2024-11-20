let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved")
    },1000)
})

let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise 2 rejected")
    },500)
})

let p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise 3 rejected")
    },2000)
});
Promise.race([p1,p2,p3])
.then((response)=>{console.log(response)})
.catch((err)=>console.log(err))

/*In the Promise.race we get the value which get first resolved or rejected by the promise object 
we will receive that value
settled means either failure or success*/