var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}




const inputEmail = document.getElementById('email');
const errorEmail = document.getElementById('emailError');
const inputName = document.getElementById('name');
const errorName = document.getElementById('nameError');

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

inputName.onchange = function () {
    if (inputName.value == "") {
        errorName.classList.remove('hidden');
        errorName.innerHTML = "field name is required"
    } else {
        if (inputName.value.length < 5) {
            errorName.classList.remove('hidden');
            errorName.innerHTML = "min 5 characters"
        } else {
            errorName.classList.add('hidden');
        }
    }
}

inputEmail.onchange = function () {
    if (inputEmail.value == "") {
        errorEmail.classList.remove('hidden');
        errorEmail.innerHTML = "field email is required"
    } else {
        if (validateEmail(inputEmail.value) === null) {
            errorEmail.classList.remove('hidden');
            errorEmail.innerHTML = "Invalid Email Address"
        } else {
            errorEmail.classList.add('hidden');
        }
    }
}