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

Promise.allSettled([p1,p2,p3]).then((response)=>{console.log(response);
})

/* In the promise.allSettled we will get all the value which got settled either that is reject or resolve
we will get all the values in the array format

In the settled we can say two things
1.Resolve,Success,Fullfilled
2.Reject,Failure,Rejected*/

