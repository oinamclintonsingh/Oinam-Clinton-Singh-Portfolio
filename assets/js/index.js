// menu = document.querySelector('.menu i');               //selects the first <i> element inside an element with the class menu.
// navbar = document.querySelector('.header .navbar');     //selects the first element with the class navbar inside an element with the class header.

// menu.onclick = () =>{                                      //sets up an event listener on the menu element. This listener triggers when the menu element is clicked.
//     navbar.classList.toggle('active');                  // If the navbar element already has the active class, it will be removed. If the navbar element does not have the active class, it will be added.
// }

let menuIcon = document.getElementById('menu-icon');
let closeIcon = document.getElementById('close-icon');
let navbar = document.querySelector('.header .navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
};

closeIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
};