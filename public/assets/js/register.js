document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const alreadyRegisteredMsg = document.getElementById('already-registered-msg');

    // // Check if the user is already registered
    // if (localStorage.getItem('isRegistered') === 'yes') {
    //     // Show the already registered message and disable the form
    //     alreadyRegisteredMsg.style.display = 'block';
    //     form.style.display = 'none';
    // }

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Store registration status in localStorage
        localStorage.setItem('isRegistered', 'yes');

        // Redirect to the home page after submission
        window.location.href = 'index.html'; // Replace 'index.html' with the home page URL
    });
}); // Function to handle form submission
document.getElementById('registerBtn').addEventListener('click', function (e) {
    e.preventDefault();

    // Check if the user is already registered
    // if (localStorage.getItem('isRegistered') === 'yes') {
    //     document.getElementById('error-msg').style.display = 'block';
    //     return;
    // }

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const classSelection = document.getElementById('class').value;
    const dob = document.getElementById('dob').value;

    // Validate input (simple validation)
    if (!name || !email || !phone || !classSelection || !dob) {
        alert('Please fill out all fields');
        return;
    }

    // Simulate registration process
    localStorage.setItem('isRegistered', 'yes');

    // Redirect to home page after submission
    window.location.href = 'index.html';
});
