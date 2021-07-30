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

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get fieldName - upper cases the first letter of the input id
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent default behavior

  checkRequired([username, email, password, password2]); // Call function and pass an array to validate input fields
})