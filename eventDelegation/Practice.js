document.querySelector('div').addEventListener("click",(event)=>{
    console.log(event.target.innerText);
    
    console.log("clicked")
})

document.querySelectorAll('li')[0].addEventListener("click",(event)=>{
    event.stopPropagation();
});
  