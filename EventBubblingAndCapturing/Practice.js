document.querySelector("#grandparent").addEventListener('click',(event)=>{
    console.log("Grand Parent clicked");
},true)

document.querySelector("#parent").addEventListener('click',(event)=>{
    console.log("parent clicked");
},true)

document.querySelector("#child").addEventListener('click',(event)=>{
    console.log("child clicked");
},false)