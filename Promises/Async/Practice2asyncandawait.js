async function getData(){
    console.log("hello world");
    const val=await p;  // await keyword should only be use inside the async function
    console.log("pranjal");// if we are logging any value here it will only get logged once promise get resolved.
    console.log(val);
    const val1=await(p2);
    console.log("Pranjal2");
    console.log(val1);
    
}
const p = new Promise((resolve,reject)=>{  /* if we are talking about these two function 
                                               here first p will get resolved beacuse getData will get
                                               suspended until our promise will resolve after that control 
                                               will again be passes to getData 
                                               
                                               
                                               Important point:- Suppose when p takes more time to resolve than p2,
                                               In this take p2 will get logged after p1 is get logged.
                                               */
    setTimeout(()=>{
        resolve("sudhar jaa chutiye");
    },200000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Pdh le chutiye");
    },300000)
})

// function getData(){
//     // Javascript will not wait for this promise to be resolved.
//     p.then(data=>console.log(data));
//     console.log("Hello world");
// };
getData();

// we can do error handling by try catch Example of error handling


const promise=new Promise((resolve,reject)=>{
    reject("Bdi company me jana h")
})
async function getStudentData(){
    try{
        const res=await promise;
        console.log(res);
    }
    catch(err){
        console.log(err)
    }
}
getStudentData();



