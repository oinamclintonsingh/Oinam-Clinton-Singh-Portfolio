// menu = document.querySelector('.menu i');               //selects the first <i> element inside an element with the class menu.
// navbar = document.querySelector('.header .navbar');     //selects the first element with the class navbar inside an element with the class header.

// menu.onclick = () =>{                                      //sets up an event listener on the menu element. This listener triggers when the menu element is clicked.
//     navbar.classList.toggle('active');                  // If the navbar element already has the active class, it will be removed. If the navbar element does not have the active class, it will be added.
// }

let menuIcon = document.getElementById('arangbam-icon');        //menuIcon is assigned the HTML element with the ID arangfam-icon.
let closeIcon = document.getElementById('khumjanba-icon');      //closeIcon is assigned the HTML element with the ID close-icon.
let navbar = document.querySelector('.header .dari');     //navbar is assigned the HTML element with the class dari that is a descendant of an element with the class header.

menuIcon.onclick = () => {                                  //When the menuIcon is clicked, an anonymous arrow function is executed.
    navbar.classList.toggle('active');                      //navbar.classList.toggle('active'): This toggles the active class on the dari element. If the dari has the active class, it will be removed; if it does not, the active class will be added.
    menuIcon.style.display = 'none';                        //menuIcon.style.display = 'none': This hides the menuIcon by setting its CSS display property to none.
    closeIcon.style.display = 'block';                      //closeIcon.style.display = 'block': This shows the closeIcon by setting its CSS display property to block.
};

closeIcon.onclick = () => {                                 //When the closeIcon is clicked, an anonymous arrow function is executed.
    navbar.classList.toggle('active');                      //navbar.classList.toggle('active'): This toggles the active class on the navbar element, similar to the previous function.
    menuIcon.style.display = 'block';                       //menuIcon.style.display = 'block': This shows the menuIcon by setting its CSS display property to block.
    closeIcon.style.display = 'none';                       //closeIcon.style.display = 'none': This hides the closeIcon by setting its CSS display property to none.
    
    window.onresize = () => {
        if (window.innerWidth > 700) { // Adjust the width as needed for your breakpoint
            // Ensure the navbar is not in active state
            navbar.classList.remove('active');
            // Reset display properties
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'none';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    };
    
    // Ensure correct icon display on initial load
    window.onload = () => {
        if (window.innerWidth > 700) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'none';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    };
};
