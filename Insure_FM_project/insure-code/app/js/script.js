console.log("hello world");
const btnhamburger = document.querySelector('#btn-hamburger');
const body = document.querySelector('.body');
const header = document.querySelector('.header');

btnhamburger.addEventListener('click', function () {
    console.log('Hamburger button click');
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        body.classList.remove('noscroll');
    }
    else {
        header.classList.add('open');
        body.classList.add('noscroll');
    }
})