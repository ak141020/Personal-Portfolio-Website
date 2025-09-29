// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
      } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        form.reset();
      }
    });
  }
});
