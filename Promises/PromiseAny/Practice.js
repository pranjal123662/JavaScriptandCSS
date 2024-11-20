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
        resolve("Promise 3 rejected")
    },20)
});

Promise.any([p1,p2,p3])
.then((data)=>{console.log(data);
})

/*In the promise.any we will get only the resolved value, which is get first 
resolved we print that value in .then

if all get rejected then we will get agrregate error*/