
var toggle = false;
// nav.addEventListener("click", handleNav);

   

function handleNav(){
    var nav = document.querySelector("nav");
    nav.style.left = "0";
    toggle = true;
    var over = document.getElementById("overlay");
    over.style.display = "block";
    over.style.backgroundColor = "rgb(8,8,8)";
    document.getElementById("inner").style.zIndex = -1;
}

function navIn(){
    var nav = document.querySelector("nav");
    nav.style.left = "-20%";
    var over = document.getElementById("overlay");
    over.style.display = "none";
    document.getElementById("inner").style.display = "none";
}

function dropdown(){
    document.getElementById("inner").style.display = "flex";
    var over = document.getElementById("overlay");
    over.style.display = "block";
    over.style.backgroundColor = "transparent";
}

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 1){
        document.querySelector("header").style.background = "#fff";
        document.getElementById("add").style.width = "650px";
        document.getElementById("add").style.paddingLeft = "30px";
        document.getElementById("add").style.transitionDuration = "0.4s";

    }else{
        document.querySelector("header").style.background = "transparent";
        document.getElementById("add").style.width = "0";
        document.getElementById("add").style.paddingLeft = "0";
        document.getElementById("add").style.transitionDuration = "0s";
    }
    
})