let navber = document.querySelector(".navbar-collapse");
let toggle = document.querySelector(".navbar-toggle");
let span = document.querySelector('.up');
toggle.onclick = function(){
    navber.classList.toggle("close");
}
window.onscroll= function(){
    if(this.scrollY >=500){
        span.classList.add("show")
    }
    else{
        span.classList.remove("show")
    }
}
span.onclick =function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}