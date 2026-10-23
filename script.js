
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("formMessage");

    if (name.length < 2) {
      result.textContent = "Please enter your name.";
      result.style.color = "red";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      result.textContent = "Please enter a valid email address.";
      result.style.color = "red";
      return;
    }

    if (message.length < 5) {
      result.textContent = "Please enter a longer message.";
      result.style.color = "red";
      return;
    }

    result.textContent =
      "Your form is valid! No message was sent because no backend is connected.";
    result.style.color = "green";
  });
}
