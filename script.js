const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const cross = document.querySelector('.cross');
const loginBtn = document.querySelector('.LOG');

// Show popup on "LOGIN" button
loginBtn.addEventListener('click', () => {
  wrapper.classList.remove('hidden');
});

// Switch to Register
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.add('active');
});

// Switch back to Login
loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.remove('active');
});

// Close popup
cross.addEventListener('click', () => {
  wrapper.classList.add('hidden');
  wrapper.classList.remove('active');
});