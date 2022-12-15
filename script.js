let toggle = document.getElementById('hamburger');
let navbar = document.getElementById('navbar');
let body = document.getElementsByTagName('body');

toggle.addEventListener('click', function(){
    toggle.classList.toggle('active')
    navbar.classList.toggle('active')
    if (navbar.classList.contains('active')) {
        // console.log('ada');
        document.body.style.overflow = 'hidden';
    } else {
        // console.log('gada')
        document.body.style.overflow = 'auto';
    }
});


// let fonts = ['font']

let sponsor = document.querySelectorAll('.sponsor p')
console.log(sponsor)
let fonts = 1;
sponsor.forEach(e => {
    e.style.fontFamily = 'font' + fonts;
    fonts += 1;
})

