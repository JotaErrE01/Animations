


const animacion = document.querySelector('.animacion');


animacion.addEventListener('click', () => {

    animacion.classList.add('a');

    if(animacion.classList.contains('a')){
        setTimeout(() => {
            animacion.remove();
        }, 450);
    }

})