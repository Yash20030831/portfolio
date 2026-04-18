
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


(function () {
  emailjs.init("pVLIqaUTOmFmc7U82"); 
})();


const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
     const year = new Date().getFullYear();


    if (!name || !email || !message) {
      status.innerText = "All fields are required ❗";
      return;
    }

    status.innerText = "Sending... ⏳";

    emailjs.send("service_eo499gi", "template_qq3w54r", {
      from_name: name,
      from_email: email,
      message: message,
      time:year
    })
    .then(() => {
      status.innerText = "Message sent successfully ✅";
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      status.innerText = "Failed to send message ❌";
    });
  });
}
