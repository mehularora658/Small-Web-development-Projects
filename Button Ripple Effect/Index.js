btnEl = document.getElementById("btn");
btnEl.addEventListener("mouseover" , (event) =>{
    y = event.pageY - btnEl.offsetTop;
    x = event.pageX - btnEl.offsetLeft;
    btnEl.style.setProperty("--posx",x+ "px");
    btnEl.style.setProperty("--posy",y+ "px");
})