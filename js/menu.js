(function(){
    const button = document.querySelector('.button');
    const nav = document.querySelector('.nav');
    button.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });
    const li1 = document.querySelector('.li1');
    li1.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });
    const li2 = document.querySelector('.li2');
    li2.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });
    const li3 = document.querySelector('.li3');
    li3.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });
    const li4 = document.querySelector('.li4');
    li4.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });    
})();