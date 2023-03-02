let textboxEl = document.getElementById("textarea");

let totalcharEl = document.getElementById("total-char");

textboxEl.addEventListener("keyup" , ()=>{
    totalcharEl.innerText = textboxEl.value.length
})




