//must code in a certain way
'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('lightTheme');
    document.body.classList.toggle('darkTheme');

    const className = document.body.className;
    if(className == 'lightTheme'){
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }
});


