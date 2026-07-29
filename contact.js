const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const contact = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value

    };

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push(contact);

    localStorage.setItem("messages", JSON.stringify(messages));

    alert("✅ Thank you! Your message has been submitted successfully.");

    form.reset();

});