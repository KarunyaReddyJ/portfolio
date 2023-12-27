// Add this to your script.js file

document.addEventListener('DOMContentLoaded', function () {
    animateName();
});

function animateName() {
    var nameSpan = document.querySelectorAll('.hero h1 .highlight span');

    nameSpan.forEach(function (span, index) {
        setTimeout(function () {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, index * 200); // Adjust the delay based on your preference
    });
}
// Add this script for form validation to your existing script.js file

document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation for demonstration purposes
    if (name && email && message) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields.');
    }
}
