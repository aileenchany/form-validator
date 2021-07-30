// Global variables
const form = document.getElementById('form'); // access the form
const username = document.getElementById('username'); // access username input
const email = document.getElementById('email'); // access email
const password = document.getElementById('password'); // access password
const password2 = document.getElementById('password2'); // access password confirmation

// Show input error message 
function showError(input, message) {
  const formControl = input.parentElement; // access div with class form-control
  formControl.className = 'form-control error'; // adding error class that will display css (red outline)
  const small = formControl.querySelector('small'); // selects the small tag inside formControl
  small.innerText = message; // display the message
}

// Show success outline 
function showSuccess(input) {
  const formControl = input.parentElement; // access form-control
  formControl.className = 'form-control success'; // adding success class that will display css (green outline)
}

// Check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent default behavior

  // validate username
  if (username.value === '') {
    showError(username, 'Username is required'); // function call
  } else {
    showSuccess(username); // function call
  }

  // validate email
  if (email.value === '') {
    showError(email, 'Email is required'); // function call
  } else if (isValidEmail(email.value)) {
    showError(username, 'Email is not valid'); // function call
  } else {
    showSuccess(email); // function call
  }

  // validate password
  if (password.value === '') {
    showError(password, 'Password is required'); // function call
  } else {
    showSuccess(password); // function call
  }

  // validate password 2
  if (password2.value === '') {
    showError(password2, 'Password 2 is required'); // function call
  } else {
    showSuccess(password2); // function call
  }
})