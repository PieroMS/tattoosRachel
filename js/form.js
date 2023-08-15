(function(){
    const btn = document.querySelector('.input__btn');
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value
        const message = document.getElementById('message').value
        if(name=="" || email=="" || number=="" || message==""){
            alert("Enter data please");
        }else{
            alert(`Thanks for write me ${name}`);
            document.getElementById('name').value="";
            document.getElementById('email').value="";;
            document.getElementById('number').value="";
            document.getElementById('message').value="";
        }
        
    });
})();