const toggleButtons = document.querySelectorAll('.toggle-btn');
const formSections = document.querySelectorAll('.form-section');

toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        toggleButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        formSections.forEach((section) => section.classList.remove('active'));
        formSections[index].classList.add('active');
    });
});

// Set the default section to "login"
toggleButtons[1].click();
// Select the "Signup" button
const signupButton = document.querySelector('.signup-btn');

// Add an event listener to the "Signup" button
signupButton.addEventListener('click', () => {
    // Get the values from the input fields
    const nickname = document.querySelector('.signup input[placeholder="Nickname"]').value;
    const username = document.querySelector('.signup input[placeholder="Username"]').value;
    const password = document.querySelector('.signup input[placeholder="Password"]').value;

    // Create an object with the user's data
    const userObject = {
        "username": username,
        "password": password,
        "name": nickname,
        "notes": "nothing"
    };

    // Convert the object to a JSON string
    const jsonString = JSON.stringify(userObject);

    // Store the JSON string in local storage using the username as the key
    localStorage.setItem(username, jsonString);
    alert("Account Created Successfully. Proceed to Login")
    // Clear the input fields after signup
    document.querySelector('.signup input[placeholder="Nickname"]').value = '';
    document.querySelector('.signup input[placeholder="Username"]').value = '';
    document.querySelector('.signup input[placeholder="Password"]').value = '';
});
// Select the "Login" button
const loginButton = document.querySelector('.login-btn');

// Add an event listener to the "Login" button
loginButton.addEventListener('click', () => {
    // Get the values from the input fields
    const username = document.querySelector('.login input[placeholder="Username"]').value;
    const password = document.querySelector('.login input[placeholder="Password"]').value;

    // Retrieve user data from local storage
    const storedData = localStorage.getItem(username);

    if (storedData) {
        // User with the provided username exists in local storage
        const userData = JSON.parse(storedData);

        if (userData.password === password) {
            // Password matches, redirect to /notes.html
            document.cookie=username;
            window.location.href = '/notes.html';
        } else {
            // Password does not match, show an error message
            alert('Incorrect password. Please try again.');
        }
    } else {
        // User with the provided username does not exist, show an error message
        alert('User not found. Please sign up first.');
    }

    // Clear the input fields after login
    document.querySelector('.login input[placeholder="Username"]').value = '';
    document.querySelector('.login input[placeholder="Password"]').value = '';
});
