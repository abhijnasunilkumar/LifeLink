function searchDonor() {

    const bloodGroup = document.getElementById("bloodGroup").value;
    const city = document.getElementById("city").value.trim().toLowerCase();

    const result = document.getElementById("result");

    result.innerHTML = "";

    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    const filtered = donors.filter(function(donor) {

        const bloodMatch = bloodGroup === "" || donor.bloodGroup === bloodGroup;

        const cityMatch =
            city === "" ||
            (donor.city && donor.city.toLowerCase().includes(city));

        return bloodMatch && cityMatch;

    });

    if (filtered.length === 0) {

        result.innerHTML = "<h2>No Donors Found</h2>";
        return;

    }

    filtered.forEach(function(donor) {

        result.innerHTML += `
        <div class="card">
            <h3>${donor.name}</h3>
            <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
            <p><strong>City:</strong> ${donor.city}</p>
            <p><strong>Phone:</strong> ${donor.phone}</p>
            <p><strong>Email:</strong> ${donor.email}</p>
        </div>
        `;

    });

}