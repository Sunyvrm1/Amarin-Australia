let button = document.querySelector('.mobile-hamburger-menu');
let menuField = document.querySelector('.header-item4');


button.addEventListener('click', function(){
    menuField.classList.toggle('active')
})


let paral = document.getElementById('parallax');
let offset = window.pageYOffset;


if(screen.width > 450){
    window.addEventListener("scroll", function () {
        var offset = window.pageYOffset - 1500;
        paral.style.backgroundPositionY =  (offset * 0.55) + "px";
    })
}else{
    window.addEventListener("scroll", function () {
        var offset = window.pageYOffset - 1600;
        paral.style.backgroundPositionY =  (offset * 0.35) + "px";
        console.log(offset)
    })
}