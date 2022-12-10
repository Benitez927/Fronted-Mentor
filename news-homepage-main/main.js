const d = document;
const navRight = d.querySelector('.menu-right');
const capa = d.querySelector('.capa');
const navMenu = d.querySelector('.nav-menu');

    d.addEventListener('click',e =>{

        if(e.target.matches('.menu-right') || e.target.matches('.menu-right *')){
            navRight.classList.toggle('close');
            capa.classList.toggle('mascara');
            navMenu.classList.toggle('show');
        }
    })