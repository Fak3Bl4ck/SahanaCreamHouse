//defilement smooth en bas de page

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.connect-btn');
    btn.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth' // Défilement en douceur
        });
    });
});

//slide

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function autoSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    const offset = -slideIndex * 100; // Calcule le décalage pour le défilement
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

setInterval(autoSlide, 3000); // Change la diapositive toutes les 3 secondes


//Contact Us

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    document.getElementById('confirmation-message').style.display = 'block';

    const formData = new FormData(this);
    const formMessage = document.getElementById('form-message');

    fetch('https://formspree.io/f/mnnavjog', { 
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('confirmation-form').style.display = 'none';
            document.getElementById('form-message').style.display = 'block';
        } else {
            // Gérer les erreurs ici
            console.error('Form submission error:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Network error:', error);
    });
});

