// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('registration-form');
//     const alreadyRegisteredMsg = document.getElementById('already-registered-msg');



//     // Handle form submission
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         // Store registration status in localStorage
//         localStorage.setItem('isRegistered', 'yes');

//         // Redirect to the home page after submission
//         window.location.href = 'index.html'; // Replace 'index.html' with the home page URL
//     });
// }); // Function to handle form submission
// document.getElementById('registerBtn').addEventListener('click', function (e) {
//     e.preventDefault();



//     // Collect form data
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const classSelection = document.getElementById('class').value;
//     const dob = document.getElementById('dob').value;

//     // Validate input (simple validation)
//     if (!name || !email || !phone || !classSelection || !dob) {
//         alert('Please fill out all fields');
//         return;
//     }

//     // Simulate registration process
//     localStorage.setItem('isRegistered', 'yes');

//     // Redirect to home page after submission
//     window.location.href = 'index.html';
// });

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting immediately

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

        // Simulate registration process (or handle actual form submission here)
        setTimeout(function () {
            // Store registration status in localStorage
            localStorage.setItem('isRegistered', 'yes');

            // Check if the original tab (opener) exists and redirect it to the home page
            if (window.opener) {
                window.opener.location.href = '../../index.html'; // Replace 'index.html' with your actual homepage URL
            }

            // Close the current tab after submission
            window.close();
        }, 1000); // Delay added for simulation purposes
    });
});


