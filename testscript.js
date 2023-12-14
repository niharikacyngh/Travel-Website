// Get a reference to the form container
const formContainer = document.getElementById('formContainer');

// Get user input (you can use prompt or any other method)
const numFields = parseInt(prompt('Enter the number of contact details you want in the form:'));

// Create the form element
const form = document.createElement('form');

// Loop to generate input fields based on user input
for (let i = 1; i <= numFields; i++) {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = `Contact Details(name,phone,aadhar,email)`;
  input.placeholder = 'Contact Details(name,phone,aadhar,email)'  ;

  // Append input to the form
  form.appendChild(input);
}

// Create a submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit form';
submitButton.textContent = 'Submit form';

// Append the submit button to the form
form.appendChild(submitButton);

// Append the form to the container
formContainer.appendChild(form);
