const userNameArray=["Pranjal","Himanshu","Chotu"]
function getCandiate(userName){
    return new Promise((resolve,reject)=>{
        userNameArray.forEach((key)=>{
            if(key==userName){
                resolve("Candidate is in the list")
            }
        })
        reject("Candidate is not in the list")

    })
}
function getCandidateResult(data){
    return new Promise((resolve,reject)=>{
        if(data=="Candidate is in the list"){
            resolve(`Here is the candidate result fail`)
        }else{
            reject("Marks is not available for this candidate")
        }
    })

}

getCandiate("Pranjal")
.then((response)=>{
    console.log(response)
    return response
}).catch((err)=>{
    console.log(err)
})
.then((data)=>
    getCandidateResult(data))
.then((result)=>{
    console.log(result);
})
.catch((err)=>
    {console.log(err);}
)
.then(()=>{
    console.log("All Process executed SuccessFully");
})

console.log("chutiye")
