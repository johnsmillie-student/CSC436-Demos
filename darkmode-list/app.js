//must code in a certain way
'use strict'

const switcher = document.querySelector('.mybtn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('lightTheme1');
    document.body.classList.toggle('darkTheme1');

    const className = document.body.className;
    if(className == 'lightTheme1'){
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }
});

/*const myModal = document.getElementById('exampleModal');
const myInput = document.getElementById('exampleModalLabel');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

*/