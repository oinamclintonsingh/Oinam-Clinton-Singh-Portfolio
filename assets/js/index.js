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

//**************************************************************** */
// Email oina thaba yanaba
const form = document.querySelector('form');
const fullName = document.getElementById("usergee-ming");
const email = document.getElementById("usergee-email");
const phone = document.getElementById("usergee-phone-number");
const subject = document.getElementById("usergee-subject");
const message = document.getElementById("usergee-message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br>Email ID: ${email.value}<br>Phone Number: ${phone.value}<br>Subject: ${subject.value}<br>Message: ${message.value}<br>`;
  Email.send({
    SecureToken: "9942429c-0e20-4f0b-8a11-570c72783006",
    To: 'clintonoinam.co@gmail.com',
    From: "clintonoinam.co@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    response => {
      if (response === "OK") {
        Swal.fire({
          title: "Successfully Sent!",
          text: "Our Executive Will Contact You Shortly",
          icon: "success"
        });
      }
    }
  );
}

function checkInputs() {
  const items = document.querySelectorAll(".input");

  for (const item of items) {
    if (item.value === "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (item.id === "usergee-email" && item.value !== "") {
      checkEmail();
    }

    if (item.id === "usergee-phone-number" && item.value !== "") {
      checkPhoneNumber();
    }

    item.addEventListener("keyup", () => {
      if (item.value !== "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailInput = document.getElementById("usergee-email");
  const emailRegex = /^(?!.*@(?:mailinator\.com|temp-mail\.org|10minutemail\.com|throwawaymail\.com|spamgourmet\.com|guerrillamail\.com|mytrashmail\.com|maildrop\.cc|fakemail\.net|yopmail\.com)$)(?:[a-zA-Z0-9._%+-]+@(?:gmail\.com|yahoo\.com|zoho\.com|outlook\.com|aol\.com|protonmail\.com|icloud\.com|example\.com|otherprovider\.com))$/;
  const errorTxtEmail = document.querySelector(".error-text.email");

  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("error");
    emailInput.parentElement.classList.add("error");

    if (email.value !== "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "E-mail Address can't be blank";
    }
  } else {
    emailInput.classList.remove("error");
    emailInput.parentElement.classList.remove("error");
  }
}

function checkPhoneNumber() {
  const phoneInput = document.getElementById("usergee-phone-number");
  const phoneRegex = /^(?!([0-9])\1{9}$)(?:(?:\+|00)[1-9]\d{0,2})?[-. (]*([2-9]\d{2})[-. )]*([2-9]\d{2})[-. ]*([0-9]{4})$/; // Regex pattern for 10-digit phone number

  const errorTxtPhone = document.querySelector(".error-text.phone");

  if (!phoneRegex.test(phoneInput.value)) {
    phoneInput.classList.add("error");
    phoneInput.parentElement.classList.add("error");

    if (phone.value !== "") {
      errorTxtPhone.innerText = "Enter a valid Phone Number";
    } else {
      errorTxtPhone.innerText = "Phone Number can't be blank";
    }
  } else {
    phoneInput.classList.remove("error");
    phoneInput.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
    sendEmail();
    form.reset();
  }
});

function formSubmit() {
  form.dispatchEvent(new Event('submit'));
}
