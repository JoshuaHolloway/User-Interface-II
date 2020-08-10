// Variable Name = Variable Value
const button = document.getElementById('Hamburger');
const navbar = document.getElementById('Navbar');

button.addEventListener('click', function() {

    console.log('clicked');

    // toggle class name of hamburger element
    // button.classList.toggle('clicked');
    navbar.classList.toggle('clicked');
});