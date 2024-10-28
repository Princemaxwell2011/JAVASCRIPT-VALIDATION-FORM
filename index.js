document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservationForm');

    reservationForm.addEventListener('submit', function (event) {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault();

        // Get form inputs
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const reservationDate = document.getElementById('reservationDate').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const numTravelers = document.getElementById('numTravelers').value;

        // Validate fields are not blank
        if (!firstName.trim()) {
            alert('Please enter your First Name.');
        } else if (!lastName.trim()) {
            alert('Please enter your Last Name.');
        } else if (!email.trim()) {
            alert('Please enter your Email.');
        } else if (!reservationDate.trim()) {
            alert('Please enter the Reservation Date.');
        } else if (!phoneNumber.trim()) {
            alert('Please enter your Phone Number.');
        } else if (!numTravelers.trim()) {
            alert('Please enter the Number of Travelers.');
        } else {
            // Move to the next section of validation
            performValidation(firstName, lastName, email, reservationDate, phoneNumber, numTravelers);
        }
    });
});



function performValidation(firstName, lastName, email, reservationDate, phoneNumber, numTravelers) {
    const currentDate = new Date();
    const selectedDate = new Date(reservationDate);

    // Validate data types and conditions
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        alert('First Name should contain only characters.');
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
        alert('Last Name should contain only characters.');
    } else if (!/^\d{10}$/.test(phoneNumber)) {
        alert('Please enter a valid 10-digit Phone Number.');
    } else if (selectedDate < currentDate.setHours(0, 0, 0, 0)) {
        alert('Reservation Date must be today or in the future.');
    } else {
        alert('Reservation submitted successfully!');
        // Here you can send the form data to the server or perform other actions.
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservationForm');

    reservationForm.addEventListener('submit', function (event) {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault();

        // Get form inputs
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const reservationDate = document.getElementById('reservationDate').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const numTravelers = document.getElementById('numTravelers').value;

        // Perform validation
        if (!firstName.trim()) {
            alert('Please enter your First Name.');
        } else if (!/^[a-zA-Z]+$/.test(firstName)) {
            alert('First Name should contain only characters.');
        } else if (!lastName.trim()) {
            alert('Please enter your Last Name.');
        } else if (!/^[a-zA-Z]+$/.test(lastName)) {
            alert('Last Name should contain only characters.');
        } else if (!email.trim()) {
            alert('Please enter your Email.');
        } else if (!reservationDate.trim()) {
            alert('Please enter the Travel Date.');
        } else {
            const currentDate = new Date();
            const selectedDate = new Date(reservationDate);

            // Allow the reservation to be made for today or a future date
            if (selectedDate < currentDate.setHours(0, 0, 0, 0)) {
                alert('Reservation Date must be today or in the future.');
            } else if (!phoneNumber.trim()) {
                alert('Please enter your Phone Number.');
            } else if (!/^\d{10}$/.test(phoneNumber)) {
                alert('Please enter a valid 10-digit Phone Number.');
            } else if (!numTravelers.trim()) {
                alert('Please enter the Number of Travelers.');
            } else {
                alert('Reservation submitted successfully!');
                // Here you can send the form data to the server or perform other actions.
            }
        }
    });
});