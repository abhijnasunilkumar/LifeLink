const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const donor = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        bloodGroup: document.getElementById("bloodGroup").value,
        city: document.getElementById("city").value,
        address: document.getElementById("address").value,
        lastDonation: document.getElementById("lastDonation").value
    };

    let donors = JSON.parse(localStorage.getItem("donors")) || [];

    donors.push(donor);

    localStorage.setItem("donors", JSON.stringify(donors));

    alert("🎉 Registration Successful!");

    form.reset();

    console.log(localStorage.getItem("donors")); // For testing
});