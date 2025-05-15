// Button click event
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

// Hover effects
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.background = '#3e8e41';
    });
    button.addEventListener('mouseout', () => {
        button.style.background = '#4CAF50';
    });
});

// Keypress detection
document.addEventListener('keypress', event => {
    console.log(`Key pressed: ${event.key}`);
});

// Secret action for double-click
document.querySelectorAll('.button').forEach(button => {
    let clickCount = 0;
    button.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 2) {
            alert('Secret action triggered!');
            clickCount = 0;
        }
    });
});

// Image gallery slideshow
const images = document.querySelectorAll('.image-gallery img');
let currentImage = 0;
setInterval(() => {
    images[currentImage].style.display = 'none';
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.display = 'block';
}, 3000);

// Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabContent = document.querySelector(`.${tab.dataset.tabContent}`);
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        tab.classList.add('active');
        tabContent.classList.add('active');
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    const requiredFields = document.querySelectorAll('[required]');
    let valid = true;
    requiredFields.forEach(field => {
        if (!field.value) {
            valid = false;
            field.style.border = '1px solid red';
        } else {
            field.style.border = '';
        }
    });
    if (!valid) {
        event.preventDefault();
    }
});

// Real-time feedback while typing
document.querySelectorAll('input[type="email"]').forEach(emailInput => {
    emailInput.addEventListener('input', () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.border = '1px solid red';
        } else {
            emailInput.style.border = '';
        }
    });
});

// Animation
document.querySelectorAll('.animate').forEach(element => {
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.opacity = 1;
    }, 1000);
});