(function(){
    window.addEventListener('scroll',()=>{
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('cambio',window.scrollY>0);
    });
})();