const container = document.getElementById('mainContainer');

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    // Toggle container class based on screen
    if (screenId === 'landingScreen') {
        container.classList.remove('mobile-view');
    } else {
        container.classList.add('mobile-view');
    }
}

function switchToYesFlow() {
    showScreen('onboardingYesScreen');
}

function switchToNoFlow() {
    showScreen('onboardingNoScreen');
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.parentElement.querySelector('.toggle-password');
    
    if (input.type === 'password') {
        input.type = 'text';
        button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
        `;
    } else {
        input.type = 'password';
        button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        `;
    }
}

// Enable/disable Next button based on form inputs
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const registerNextBtn = document.getElementById('registerNext');

function checkFormValidity() {
    if (firstNameInput.value && lastNameInput.value && emailInput.value) {
        registerNextBtn.disabled = false;
    } else {
        registerNextBtn.disabled = true;
    }
}

firstNameInput.addEventListener('input', checkFormValidity);
lastNameInput.addEventListener('input', checkFormValidity);
emailInput.addEventListener('input', checkFormValidity);
