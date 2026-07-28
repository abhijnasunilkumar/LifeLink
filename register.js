// Select the form
const form = document.getElementById("registerForm");

// Listen for form submission
form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get values from the form
    const donor = {

        name: form.elements[0].value,
        email: form.elements[1].value,
        phone: form.elements[2].value,
        age: form.elements[3].value,
        gender: form.elements[4].value,
        bloodGroup: form.elements[5].value,
        city: form.elements[6].value,
        address: form.elements[7].value,
        lastDonation: form.elements[8].value

    };

    // Get existing donors
    let donors = JSON.parse(localStorage.getItem("donors")) || [];

    // Add new donor
    donors.push(donor);

    // Save back to localStorage
    localStorage.setItem("donors", JSON.stringify(donors));

    alert("🎉 Registration Successful!");

    // Clear form
    form.reset();

});