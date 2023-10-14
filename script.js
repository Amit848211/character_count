let textarea=document.querySelector("#textarea");
let total=document.querySelector("#total");
let rem=document.querySelector("#rem");
let audio=new Audio("click-button-140881.mp3")
textarea.addEventListener('input', (e)=>{
     
   let count=e.target.value.length;
   let remaininig0=50-e.target.value.length;
   total.innerText=count;
   rem.innerText=remaininig0;
   audio.play();
})
// textarea.addEventListener('input',add(e)=>{

// })
   