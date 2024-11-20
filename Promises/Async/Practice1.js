async function getData(){   // the async keyword always returns a promise beacuse its wraps the return in a promise 
    return p;
}
 
const p=new Promise((resolve,reject)=>{  // When we use like this then in the async keyword funciton it will not wrap return function in the promise
        resolve('tu chutiya ka sartaz h')
    })


getData().then(data=>console.log(data));


